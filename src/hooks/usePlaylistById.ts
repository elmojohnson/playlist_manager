import { useEffect, useState } from "react";
import { Playlist } from "../types";
import spotify from "../lib/spotify";
import { useParams } from "react-router-dom";

const usePlaylistById = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState<Playlist>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const getPlaylist = async () => {
    try {
      setLoading(true);

      const result = await spotify.get("/playlists/" + id);
      setPlaylist(result.data)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlaylist();
  }, [id])

  return { playlist, isLoading };
};

export default usePlaylistById;
