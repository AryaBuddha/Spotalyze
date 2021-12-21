import React, { useEffect } from "react";

import { Button, Card, Typography } from "antd";
import { motion } from "framer-motion";

import "../Styles/Recommendations.less";
import InfoCard from "../Shared/InfoCard";

const Recommendations = ({
  trackRecommendations,
  setRecommendationLimit,
  recommendationLimit,
}) => {
  const { Title, Text } = Typography;

  return (
    <Card
      style={{
        borderRadius: "1.5rem",
        width: "100%",
        boxShadow: "0px 8px 15px -2px rgba(0,0,0,0.1)",
        marginBottom: "10px",
      }}
    >
      <motion.div
        animate={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
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
          <h2>Your recommendations:</h2>
          <Button type="default">
            <Text>Create Playlist</Text>
          </Button>
        </div>
        <div className="sections-container">
          <div style={{ width: "50rem" }}>
            {!trackRecommendations ? (
              <div></div>
            ) : (
              <div>
                <Text style={{ fontSize: "1.25rem" }}>Songs</Text>
                <td style={{ paddingBottom: "20px" }} />
                <InfoCard
                  dataType={"tracks"}
                  trackData={trackRecommendations}
                />
                <Text
                  style={{ color: "#1DB954", cursor: "pointer" }}
                  onClick={() => {
                    setRecommendationLimit((recommendationLimit += 5));
                  }}
                >
                  Show more
                </Text>
              </div>
            )}
          </div>

          <div style={{ width: "50rem" }}>
            <Text style={{ fontSize: "1.1rem" }}>Artists</Text>
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

export default Recommendations;
