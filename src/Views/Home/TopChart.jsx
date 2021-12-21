import React from "react";

import { Card, Typography, Spin, Radio } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import "../Styles/Home.less";
import InfoCard from "../Shared/InfoCard";

const TopChart = ({
  topData,
  topDataType,
  setTopDataLimit,
  topDataLoading,
  setTopDataType,
  topDataLimit,
}) => {
  const { Title, Text } = Typography;
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 40, color: "green" }} spin />
  );
  console.log(topDataLoading);
  return (
    <Card
      style={{
        borderRadius: "1.5rem",
        /* width: "80rem", */
        width: "70%",
        minWidth: "25rem",
        boxShadow: "0px 8px 15px -2px rgba(0,0,0,0.1)",
        marginBottom: "10px",
      }}
    >
      <motion.div
        animate={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
      >
        {topDataLoading ? (
          <Spin style={{ marginLeft: "50%" }} indicator={antIcon} />
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Your top {topDataType}:</h2>
              <Radio.Group
                defaultValue={topDataType}
                buttonStyle="solid"
                onChange={(e) => {
                  setTopDataType(e.target.value);
                  setTopDataLimit(5);
                  console.log(topData);
                }}
              >
                <Radio.Button value="tracks">Tracks</Radio.Button>
                <Radio.Button value="artists">Artists</Radio.Button>
              </Radio.Group>
            </div>

            <InfoCard
              artistData={topData["artists"]}
              trackData={topData["tracks"]}
              dataType={topDataType}
            />
            <Text
              style={{ color: "#1DB954", cursor: "pointer" }}
              onClick={() => {
                setTopDataLimit((topDataLimit += 5));
                console.log(topDataLimit);
              }}
            >
              Show more
            </Text>
          </>
        )}
      </motion.div>
    </Card>
  );
};

export default TopChart;
