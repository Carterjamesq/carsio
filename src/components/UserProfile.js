import React from "react";
import { Helmet } from "react-helmet";

const UserProfile = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Carsio - Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>User Profile</h1>
    </div>
  );
};

export default UserProfile;
