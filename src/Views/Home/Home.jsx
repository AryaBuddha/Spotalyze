import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { Link } from "react-router-dom";

import "../Styles/Home.less";
import { UserContext } from "../../Contexts/UserContext";
import { getBasicInfo, getTop } from "../../Actions/SpotifyFetch";

import TopChart from "./TopChart";
import SideInfo from "./SideInfo";

import { Text } from "antd";

const Home = () => {
  const { user } = React.useContext(UserContext);
  const { Text, Title } = Typography;

  const [userName, setUserName] = useState("Loading...");

  const [topData, setTopData] = useState({ tracks: [], artists: [] });
  const [topDataType, setTopDataType] = useState("tracks");
  const [topDataLimit, setTopDataLimit] = useState(5);
  const [topDataLoading, setTopDataLoading] = useState(true);

  useEffect(() => {
    if (user !== null) {
      try {
        getBasicInfo(user).then((data) => {
          setUserName(data.display_name);
        });
      } catch {}
    }
  }, [user]);

  useEffect(() => {
    if (user !== null) {
      try {
        getTop(user, topDataType, topDataLimit).then((data) => {
          console.log(data);
          setTopData({
            ...topData,
            [topDataType]: data.items,
          });
          setTopDataLoading(false);
          console.log(topData);
        });
      } catch {}
    }
  }, [topDataLimit, topDataType, user]);

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
        <SideInfo />
      </div>
    </div>
  );
};

export default Home;
