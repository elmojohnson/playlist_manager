import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../layout/app/Layout";

const Playlist = () => {
  return (
    <Layout>
      <h1>Playlist</h1>
      <Outlet />
    </Layout>
  );
};

export default Playlist;
