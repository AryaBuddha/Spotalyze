import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import "../Styles/Home.less";
import { UserContext } from "../../Contexts/UserContext";
import { getBasicInfo, getTop } from "../../Actions/SpotifyFetch";
import { verifyToken } from "../../Actions/SpotifyLogin";

import TopChart from "./TopChart";
import SideInfo from "./SideInfo";

import { Text } from "antd";
import Recommendations from "../Recommendations";

const Home = () => {
  const { user } = React.useContext(UserContext);
  const { Text, Title } = Typography;
  const navigate = useNavigate();

  const [userName, setUserName] = useState("Loading...");

  const [topData, setTopData] = useState({ tracks: [], artists: [] });
  const [topDataType, setTopDataType] = useState("tracks");
  const [topDataLimit, setTopDataLimit] = useState(5);
  const [topDataLoading, setTopDataLoading] = useState(true);

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

  useEffect(() => {
    if (user !== null) {
      populateTopData();
    }
  }, [topDataLimit, user]);

  return (
    <div className="main-content">
      <div className="welcome-container">
        <Title style={{ marginBottom: "2px" }}>
          Welcome to Spotalyze, {userName}!
        </Title>
        <h2>Your Spotify listening habits, "Spotalyzed"</h2>
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
        />
        {/* <Recommendations /> */}
      </div>
    </div>
  );
};

export default Home;
