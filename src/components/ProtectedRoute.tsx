import { FC } from 'react';
import { Navigate } from "react-router-dom"

interface App {
    children: any
}

const ProtectedRoute:FC<App> = ({children}) => {
  return localStorage.getItem("access_token") ? children : <Navigate to="/login" />
}

export default ProtectedRoute