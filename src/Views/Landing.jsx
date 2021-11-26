import React from "react";

import { UserContext } from "../Contexts/UserContext";

export const Landing = () => {
  const { user } = React.useContext(UserContext);

  console.log(user);

  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
};

export default Landing;
