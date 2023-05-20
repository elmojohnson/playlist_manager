import React from "react";
import useMyPlaylists from "../../hooks/useMyPlaylists";

const Sidebar = () => {
  const { playlists, isLoading } = useMyPlaylists();
  return (
    <div className="bg-gray-200 h-full overflow-y-scroll">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {playlists.map((playlist, i) => {
            return <p key={i}>{playlist.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
