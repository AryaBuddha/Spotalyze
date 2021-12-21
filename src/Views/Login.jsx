import React, { useEffect } from "react";
import { useParams, useLocation, Navigate } from "react-router";
import { useNavigate } from "react-router-dom";

import { Card, Typography, Input, Button } from "antd";

import { UserContext } from "../Contexts/UserContext";

import "./Styles/Login.less";
import WhiteSpotifyLogo from "../Assets/WhiteSpotifyLogo.png";

const Login = () => {
  const navigate = useNavigate();

  const { Text, Title } = Typography;
  const { user, setUser } = React.useContext(UserContext);

  document.title = "Spotalyze | Login";

  const getToken = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    return hashParams.access_token;
  };

  useEffect(() => {
    const token = getToken();

    if (token) {
      setUser(token);
      localStorage.setItem("SpotifyToken", token);
    }
  }, []);

  useEffect(() => {
    console.log(user);
    if (user !== null && user !== undefined && user !== "undefined") {
      console.log(user);
      navigate("/home");
    }
  });

  return (
    <div className="login-container">
      <Card
        style={{
          width: 450,
          borderRadius: "20px",
          background: "#fff",
          boxShadow: " 0px 8px 15px -2px rgba(0,0,0,0.1)",
        }}
      >
        <div className="login-form">
          <Title style={{ alignContent: "center" }} className="testtitle">
            Log in to Spotalyze
          </Title>

          <Button
            size="large"
            style={{
              background: "#1DB954",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              boxShadow: " 0px 8px 15px -2px rgba(0,0,0,0.1)",
            }}
            onClick={() => {
              window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&scope=user-top-read%20user-library-read%20user-read-recently-played&redirect_uri=http://localhost:3000/login`;
            }}
          >
            <img style={{ maxWidth: "8%" }} src={WhiteSpotifyLogo} />
            <p
              style={{
                fontFamily: "Mulish",
                fontStyle: "bold",
                marginLeft: "10px",
              }}
            >
              Login with Spotify
            </p>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
