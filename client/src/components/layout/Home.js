import React from "react";
import AuthContext from "../../context/authContext";
import { useContext, useEffect, useState } from "react";
import ArtistList from "../artists/ArtistList";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ArtistList />
    </div>
  );
};
export default Home;
