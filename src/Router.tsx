import { createHashRouter } from "react-router-dom";
import App from "./App";
import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./routes/NotFound";
// routes
import Home from "./routes/Home";
import Search from "./routes/Search";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorComponent />,
            },{
                path: "search/:query",
                element: <Search />,
                errorElement: <ErrorComponent />,
            }
        ],
        errorElement: <NotFound />,    
    }
]);


export default router;