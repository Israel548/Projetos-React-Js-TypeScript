import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Detail } from "./pages/detail/detail";
import { NotFound } from "./pages/notfound";
import { Layout } from "./components/layout";

const rotas = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/cripto",
                element: <Detail />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export { rotas }