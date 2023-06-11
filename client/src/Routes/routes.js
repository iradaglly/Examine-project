import AddPage from "../Pages/AddPage";
import DetailPage from "../Pages/DetailPage";
import HomePage from "../Pages/HomePage";
import MainRoot from "../Pages/MainRoot";
import NotFound from "../Pages/NotFound";

export const ROUTES = [
    {
        path: "",
        element: <MainRoot />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/add",
                element: <AddPage />,
            },
            {
                path: "/platforms/:id",
                element: <DetailPage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ]
    }
]