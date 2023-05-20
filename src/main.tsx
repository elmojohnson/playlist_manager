import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Playlist from "./pages/playlist/Playlist";
import ViewPlaylist from "./pages/playlist/ViewPlaylist";
import NewPlaylist from "./pages/playlist/NewPlaylist";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Playlist />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "playlist/:id",
        element: <ViewPlaylist />
      },
      {
        path: "playlist/new",
        element: <NewPlaylist />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
