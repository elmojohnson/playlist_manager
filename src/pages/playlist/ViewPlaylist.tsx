import React from 'react'
import Navbar from '../../layout/playlist/Navbar'
import usePlaylistById from '../../hooks/usePlaylistById'

const ViewPlaylist = () => {
  const {playlist, isLoading} = usePlaylistById();

  return (
    <div>
      <Navbar title={playlist?.name} isLoading={isLoading} />
    </div>
  )
}

export default ViewPlaylist