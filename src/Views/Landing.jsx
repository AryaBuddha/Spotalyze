import React from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../Contexts/UserContext";
import { Typography, Button } from "antd";
import { motion } from "framer-motion";

import "./Styles/Landing.less";

export const Landing = () => {
  const navigate = useNavigate();
  const { Title, Text } = Typography;

  return (
    <div className="main-content">
      <div className="main-column">
        <motion.div
          animate={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 1 }}
        >
          <Title style={{ fontWeight: "bold", fontSize: "3.5rem" }}>
            Spotalyze
          </Title>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "2.3rem" }}>
            Analyze your listening habits
          </h1>
          <Text style={{ fontSize: "1.2rem", display: "block" }}>
            See your favorite music and discover new ones.
          </Text>
          <Text style={{ fontSize: "1rem" }}>Made by Aryadeep Buddha</Text>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <Button
            style={{ width: "15rem", height: "4rem", borderRadius: "20px" }}
            type="primary"
          >
            <Title
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Title>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
