import { Outlet } from "react-router-dom";
import Layout from "../../layout/app/Layout";

const Playlist = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Playlist;
