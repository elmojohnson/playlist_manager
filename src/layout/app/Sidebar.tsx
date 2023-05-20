import {Link} from "react-router-dom";
import useMyPlaylists from "../../hooks/useMyPlaylists";
import PlaylistItem from "../../components/items/PlaylistItem";

const Sidebar = () => {
  const { playlists, isLoading } = useMyPlaylists();

  return (
    <div className="bg-gray-200 h-full overflow-y-scroll p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col">
          <Link to="/">Home</Link>
          {playlists.map((playlist, i) => {
            return <PlaylistItem key={i} {...playlist} />
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
