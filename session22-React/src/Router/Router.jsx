import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/layout";
import { Products } from "../pages/Products";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";


export const CustomRouter = createBrowserRouter([
    {
        // http://localhost:5174
        path: "",
        element: <Layout />,
        children: [
            { element: <Home />, index: true },
            { path: "products", element: <Products /> },
            { path: "contact", element: <Contact /> },
        ]
    }
])