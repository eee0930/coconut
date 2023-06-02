import App from "./App";
import { createHashRouter } from "react-router-dom";

// components
import ErrorComponent from "./components/ErrorComponent";

// routes
import Base from "./layout/Base";
import Auth from "./layout/Auth";
import Login from "./routes/Login";
import Search from "./routes/Search";
import NotFound from "./routes/NotFound";
import ListMixTape from "./routes/ListMixTape";
import ViewAlbum from "./routes/ViewAlbum";
import ViewMusic from "./routes/ViewMusic";
import ViewArtist from "./routes/ViewArtist";
import ListChart from "./routes/ListChart";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Base />,
        children: [
          {
            path: "search/:query",
            element: <Search />,
          },{
            path: "mixtape",
            element: <ListMixTape />,
            children: [
              {
                path: ":id",
                element: <ViewAlbum />,
              }
            ],
          },{
            path: "album/:id",
            element: <ViewAlbum />,
          },{
            path: "music/:id",
            element: <ViewMusic />,
          },{
            path: "artist/:id",
            element: <ViewArtist />,
          },{
            path: "chart",
            element: <ListChart />,
          }
        ],
        errorElement: <ErrorComponent />,
      },{
        path: "auth",
        element: <Auth />,
        children: [{
          path: "login",
          element: <Login />,
        }],
        errorElement: <ErrorComponent />,
      }
    ],
    errorElement: <NotFound />,    
  }
]);


export default router;