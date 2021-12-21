import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../Contexts/UserContext";
import {
  getBasicInfo,
  getTop,
  getTrackRecommendations,
} from "../../Actions/SpotifyFetch";
import { verifyToken } from "../../Actions/SpotifyLogin";

import "../Styles/Home.less";
import TopChart from "./TopChart";
import SideInfo from "./SideInfo";
import Recommendations from "./Recommendations";

import { Text } from "antd";

const Home = () => {
  const { user } = React.useContext(UserContext);
  const { Text, Title } = Typography;
  const navigate = useNavigate();

  const [userName, setUserName] = useState("Loading...");

  const [topData, setTopData] = useState({ tracks: [], artists: [] });
  const [topDataType, setTopDataType] = useState("tracks");
  const [topDataLimit, setTopDataLimit] = useState(5);
  const [topDataLoading, setTopDataLoading] = useState(true);
  const [genres, setGenres] = useState(null);

  const [trackRecommendations, setTrackRecommendations] = useState(null);
  const [artistRecommendations, setArtistRecommendations] = useState(null);
  const [recommendationLimit, setRecommendationLimit] = useState(5);

  useEffect(() => {
    if (localStorage.getItem("SpotifyToken") == null) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (user !== null) {
      try {
        getBasicInfo(user).then((data) => {
          setUserName(data.display_name);
        });
      } catch {
        navigate("/login");
      }
    }
  }, [user]);

  const populateTopData = async () => {
    let tracks;
    let artists;
    try {
      getTop(user, "artists", topDataLimit).then((data) => {
        console.log(data);
        artists = data.items;

        console.log(topData);
        getTop(user, "tracks", topDataLimit).then((data) => {
          console.log(data);
          tracks = data.items;
          console.log(topData);
          setTopData({ tracks: tracks, artists: artists });
          setTopDataLoading(false);
        });
      });
    } catch {}
    try {
    } catch {}
  };

  const getGenres = () => {
    if (!topDataLoading) {
      let genres = [];
      for (const artist of topData.artists) {
        for (const genre of artist.genres) {
          if (!genres.includes(genre)) {
            genres.push(genre);
          }
        }
      }
      return genres.slice(0, 15);
    }
  };

  const getSeeds = () => {
    let tracks = [];
    let artists = [];
    let seed_genres = genres;

    topData.artists.map((artist) => {
      artists.push(artist.id);
    });
    topData.tracks.map((track) => {
      tracks.push(track.id);
    });

    artists = artists.slice(0, 5).join("%2C");
    seed_genres = seed_genres.slice(0, 2).join("%2C");
    tracks = tracks.slice(0, 3).join("%2C");

    return {
      genres: seed_genres.replaceAll(" ", "%20"),
      tracks: tracks,
      artists: artists,
    };
  };

  useEffect(() => {
    if (user !== null) {
      populateTopData();
    }
  }, [topDataLimit, user]);

  useEffect(() => {
    if (topDataLoading !== null) {
      setGenres(getGenres());
    }
  }, [topDataLoading, topData]);

  useEffect(() => {
    console.log(user);
    if (user && genres) {
      const seeds = getSeeds();

      getTrackRecommendations(
        user,
        seeds.genres,
        seeds.tracks,
        recommendationLimit
      ).then((data) => {
        setTrackRecommendations(data.tracks);
      });
    }
  }, [user, genres, recommendationLimit]);

  return (
    <div className="main-content">
      <div className="welcome-container">
        <Title style={{ marginBottom: "2px" }}>
          Welcome to <span style={{ color: "#1DB977" }}>Spotalyze</span>,{" "}
          {userName}!
        </Title>
        <h2>
          Your Spotify listening habits, "
          <span style={{ color: "#1DB977" }}>Spotalyzed</span>"
        </h2>
      </div>
      <div className="card-container">
        <TopChart
          topData={topData}
          setTopDataType={setTopDataType}
          topDataType={topDataType}
          setTopDataLimit={setTopDataLimit}
          topDataLoading={topDataLoading}
          topDataLimit={topDataLimit}
        />
        <SideInfo
          topData={topData}
          setTopDataType={setTopDataType}
          topDataType={topDataType}
          setTopDataLimit={setTopDataLimit}
          topDataLoading={topDataLoading}
          topDataLimit={topDataLimit}
          genres={genres}
        />
        <Recommendations
          trackRecommendations={trackRecommendations}
          artistRecommendations={artistRecommendations}
          genres={genres}
          recommendationLimit={recommendationLimit}
          setRecommendationLimit={setRecommendationLimit}
        />
      </div>
    </div>
  );
};

export default Home;
