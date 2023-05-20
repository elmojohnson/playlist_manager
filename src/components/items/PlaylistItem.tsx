import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Playlist } from "../../types";

const PlaylistItem: FC<Playlist> = (playlist) => {
  const { id } = useParams();

  return (
    <Link
      className={`px-4 py-1 rounded ${playlist.id === id && "bg-gray-300"}`}
      to={"/playlist/" + playlist.id}
    >
      {playlist.name}
    </Link>
  );
};

export default PlaylistItem;
