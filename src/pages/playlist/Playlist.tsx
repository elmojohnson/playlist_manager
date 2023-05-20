import React from 'react'
import {Outlet} from "react-router-dom"

const Playlist = () => {
  return (
    <div>
      <h1>Playlist</h1>
      <Outlet />
    </div>
  )
}

export default Playlist