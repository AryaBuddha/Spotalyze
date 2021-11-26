import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { Link } from "react-router-dom";

import "../Styles/Home.less";
import { UserContext } from "../../Contexts/UserContext";
import { getBasicInfo } from "../../Actions/SpotifyFetch";

import TopChart from "./TopChart";

import { Text } from "antd";

const Home = () => {
  const { user } = React.useContext(UserContext);
  const { Text, Title } = Typography;
  const [userName, setUserName] = useState("Loading...");

  useEffect(() => {
    getBasicInfo(user).then((data) => {
      try {
        setUserName(data.display_name);
      } catch {}
    });
  }, [user]);

  return (
    <div className="main-content">
      <div className="welcome-container">
        <Title style={{ marginBottom: "2px" }}>
          Welcome to Spotalyze, {userName}!
        </Title>
        <h2>Your Spotify listening habits, "Spotalyzed"</h2>
      </div>
      <div className="card-container">
        <TopChart />
        <Card
          style={{
            borderRadius: "1.5rem",
            boxShadow: "0px 8px 15px -2px rgba(0,0,0,0.1)",
            width: "33rem",
            height: "300px",
          }}
        >
          <></>
        </Card>
      </div>
    </div>
  );
};

export default Home;
