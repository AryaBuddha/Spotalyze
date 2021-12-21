import React, { useEffect, useMemo } from "react";

import "../Styles/SideInfo.less";

import { Card, Progress, Typography, Tag, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const SideInfo = ({
  topData,
  topDataType,
  setTopDataLimit,
  topDataLoading,
  setTopDataType,
  topDataLimit,
  genres,
}) => {
  const { Title, Text } = Typography;
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 40, color: "green" }} spin />
  );

  //const genres = useMemo(() => getGenres());
  console.log(genres);

  const calculatePopulatiry = () => {
    if (!topDataLoading) {
      let totalPopularity = 0;
      for (let i = 0; i < topData.tracks.length; i++) {
        totalPopularity += topData.tracks[i].popularity;
        totalPopularity += topData.artists[i].popularity;
      }

      return Math.floor(totalPopularity / (topData.tracks.length * 2));
    }
  };

  const popularity = useMemo(() => calculatePopulatiry());

  return (
    <Card
      style={{
        borderRadius: "1.5rem",
        boxShadow: "0px 8px 15px -2px rgba(0,0,0,0.1)",
        /* width: "34rem", */
        width: "29%",
        minWidth: "25rem",
        height: "100%",
        marginBottom: "10px",
      }}
    >
      {genres == null ? (
        <LoadingOutlined style={{ fontSize: 40, color: "green" }} spin />
      ) : (
        <motion.div
          className="side-container"
          animate={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          <div
            className="side-container-title"
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1.5rem",
            }}
          >
            <Progress
              type="dashboard"
              gapDegree={80}
              percent={popularity}
              strokeColor="#1DB954"
              width={200}
              format={(percent) => `${percent}%`}
              style={{ marginBottom: "-2rem" }}
            />
            <Text style={{ fontSize: "1.3rem", alignSelf: "center" }}>
              Taste Rating
            </Text>
            <Text type="secondary">Based on popularity of music taste</Text>
          </div>
          <div>
            <h2>Top genres:</h2>
            <div className="genre-container">
              {genres.map((genre) => {
                return (
                  <motion.div
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    initial={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Tag
                      color={
                        "#" + (Math.random().toString(16) + "00000").slice(2, 8)
                      }
                      style={{ marginTop: "5px" }}
                    >
                      {genre}
                    </Tag>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </Card>
  );
};

export default SideInfo;
