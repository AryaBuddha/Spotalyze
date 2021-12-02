import React from "react";

import { Card, Typography, Spin, Radio } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import "../Styles/Home.less";

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
        width: "80rem",
        boxShadow: "0px 8px 15px -2px rgba(0,0,0,0.1)",
        marginBottom: "10px",
      }}
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
              }}
            >
              <Radio.Button value="tracks">Tracks</Radio.Button>
              <Radio.Button value="artists">Artists</Radio.Button>
            </Radio.Group>
          </div>

          {topDataType == "artists"
            ? topData[topDataType].map(({ name, images, popularity }) => {
                return (
                  <div key={name} className="track-card">
                    <img
                      style={{
                        borderRadius: "5px",
                        height: "64px",
                        width: "64px",
                      }}
                      src={images[2].url}
                    />
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
              })
            : topData[topDataType].map(({ name, album, artists }) => {
                return (
                  <div key={name} className="track-card">
                    <img
                      style={{ borderRadius: "5px" }}
                      src={album.images[2].url}
                    />
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
              })}
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
    </Card>
  );
};

export default TopChart;
