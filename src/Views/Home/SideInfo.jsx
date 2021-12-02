import React from "react";

import "../Styles/SideInfo.less";

import { Card, Progress, Typography } from "antd";

const SideInfo = () => {
  const { Title, Text } = Typography;
  return (
    <Card
      style={{
        borderRadius: "1.5rem",
        boxShadow: "0px 8px 15px -2px rgba(0,0,0,0.1)",
        width: "33rem",
        height: "300px",
      }}
    >
      <div className="side-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Progress
            type="dashboard"
            gapDegree={80}
            percent={80}
            strokeColor="#1DB954"
            width={200}
            style={{ marginBottom: "-2rem" }}
          />
          <Text style={{ fontSize: "1.3rem", alignSelf: "center" }}>
            Taste Rating
          </Text>
        </div>
        <div>
          <Text>Your most popular songs are: Yourrurururu</Text>
        </div>
      </div>
    </Card>
  );
};

export default SideInfo;
