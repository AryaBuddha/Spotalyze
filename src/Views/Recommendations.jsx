import React from "react";

import { Card } from "antd";

const Recommendations = () => {
  return (
    <Card
      style={{
        borderRadius: "1.5rem",
        width: "100%",
        boxShadow: "0px 8px 15px -2px rgba(0,0,0,0.1)",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Hello</h1>
      </div>
    </Card>
  );
};

export default Recommendations;
