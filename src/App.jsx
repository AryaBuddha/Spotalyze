import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Card, Layout, Button, Typography } from "antd";

import "./App.css";
import { UserContext } from "./Contexts/UserContext";
import { UserDataContext } from "./Contexts/UserDataContext";
import { verifyToken } from "./Actions/SpotifyLogin";

import Landing from "./Views/Landing";
import Login from "./Views/Login";
import Home from "./Views/Home/Home";

const App = () => {
  const [user, setUser] = useState(null);
  const userProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [userData, setUserData] = useState(null);
  const userDataProvider = useMemo(
    () => ({ userData, setUserData }),
    [userData, setUserData]
  );

  useEffect(() => {
    const storedToken = localStorage.getItem("SpotifyToken");
    if (storedToken !== null) {
      verifyToken(storedToken).then((valid) => {
        if (valid) {
          setUser(storedToken);
        } else {
          localStorage.removeItem("SpotifyToken");
        }
      });
    } else if (storedToken === null || storedToken == "undefined") {
      localStorage.removeItem("SpotifyToken");
    }
    console.log(user);
  });

  return (
    <UserContext.Provider value={userProvider}>
      <UserDataContext.Provider value={userDataProvider}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserDataContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
