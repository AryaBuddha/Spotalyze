import React, { useEffect, useMemo } from "react";

import "../Styles/SideInfo.less";

import { Card, Progress, Typography, Tag } from "antd";

const SideInfo = ({
  topData,
  topDataType,
  setTopDataLimit,
  topDataLoading,
  setTopDataType,
  topDataLimit,
}) => {
  const { Title, Text } = Typography;

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
      return genres;
    }
  };
  console.log(getGenres());

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
        width: "33rem",
        height: "100%",
        marginBottom: "10px",
      }}
    >
      <div className="side-container">
        <div
          className="side-container-title"
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "3rem",
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
          <Text style={{ fontSize: "1.6rem" }}>Top Genres</Text>
          <div className="genre-container">
            {getGenres() &&
              getGenres().map((genre) => {
                return (
                  <Tag
                    color={
                      "#" + (Math.random().toString(16) + "00000").slice(2, 8)
                    }
                    style={{ marginTop: "5px" }}
                  >
                    {genre}
                  </Tag>
                );
              })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SideInfo;
