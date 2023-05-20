import { FC } from "react";
import { Link } from "react-router-dom";
import { Playlist } from "../../types";

const PlaylistItem: FC<Playlist> = (playlist) => {
  return <Link to={"/playlist/" + playlist.id}>{playlist.name}</Link>;
};

export default PlaylistItem;
