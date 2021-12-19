import React, { useEffect } from "react";

import { Typography } from "antd";

const InfoCard = ({ topDataType, artistData, trackData }) => {
  const { Title, Text } = Typography;

  if (topDataType == "artists") {
    return (
      <div>
        {artistData.map(({ name, external_urls, images, popularity }) => {
          return (
            <div className="track-card">
              <a href={external_urls.spotify} target="_blank">
                <img
                  style={{
                    borderRadius: "5px",
                    height: "64px",
                    width: "64px",
                  }}
                  src={images[2].url}
                />
              </a>
              <div
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "space-around",
                }}
              >
                <Title level={4}>{name}</Title>
                <Text>{popularity}% Popular</Text>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    );
  } else {
    return trackData.map(({ name, album, artists }) => {
      return (
        <div key={name} className="track-card">
          <img style={{ borderRadius: "5px" }} src={album.images[2].url} />
          <div
            style={{
              marginLeft: "20px",
              display: "flex",
              flexDirection: "column",
              alignContent: "space-around",
            }}
          >
            <Title level={4}>{name}</Title>
            <div>
              {artists.map(({ name }, i) => {
                if (i === artists.length - 1) {
                  return <Text>{name}</Text>;
                } else {
                  return <Text>{`${name}, `}</Text>;
                }
              })}
            </div>
          </div>
          <br />
        </div>
      );
    });
  }
};

export default InfoCard;
