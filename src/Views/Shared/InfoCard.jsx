import React, { useEffect } from "react";

import { Typography } from "antd";
import { motion, MotionConfig } from "framer-motion";

const InfoCard = ({ dataType, artistData, trackData }) => {
  const { Title, Text } = Typography;

  if (dataType == "artists") {
    return artistData.map(({ name, external_urls, images, popularity }) => {
      return (
        <div key={name} className="track-card">
          <motion.div
            animate={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.9 }}
          >
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
          </motion.div>

          <motion.div
            style={{
              marginLeft: "20px",
              display: "flex",
              flexDirection: "column",
              alignContent: "space-around",
            }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Title level={4}>{name}</Title>
            <Text>{popularity}% Popular</Text>
          </motion.div>

          <br />
        </div>
      );
    });
  } else {
    return trackData.map(({ name, album, artists }) => {
      return (
        <div key={name} className="track-card">
          <motion.div
            animate={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.9 }}
          >
            <img style={{ borderRadius: "5px" }} src={album.images[2].url} />
          </motion.div>

          <motion.div
            style={{
              marginLeft: "20px",
              display: "flex",
              flexDirection: "column",
              alignContent: "space-around",
            }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
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
          </motion.div>

          <br />
        </div>
      );
    });
  }
};

export default InfoCard;
