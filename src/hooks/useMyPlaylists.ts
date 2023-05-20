import React, { useEffect, useState } from "react";
import { Playlist } from "../types";
import spotify from "../lib/spotify";

const useMyPlaylists = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getPlaylists = async () => {
    try {
      setLoading(true);

      const result = await spotify.get("/me/playlists");
      setPlaylists(result.data.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlaylists();
  }, [])

  return { playlists, isLoading };
};

export default useMyPlaylists;
