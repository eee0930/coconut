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

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Base />,
        children: [{
          path: "search/:query",
          element: <Search />,
          errorElement: <ErrorComponent />,
        }],
        errorElement: <NotFound />,
      },{
        path: "auth",
        element: <Auth />,
        children: [{
          path: "login",
          element: <Login />,
          errorElement: <ErrorComponent />,
        }],
        errorElement: <NotFound />,
      }
    ],
    errorElement: <NotFound />,    
  }
]);


export default router;