import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Products } from "../pages/products";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { SingleProduct } from "../pages/singleProduct";


export const route = createBrowserRouter([
    {
        // http://localhost:5173/
        path:"" , 
        element : <Layout/>,
        children :[
            {
                element:<Home/> , index:true
            },
            // http://localhost:5173/products
            {path:'products' , element:<Products/>},
            // http://localhost:5173/products/id
            {path:'products/:productId' , element:<SingleProduct/>},
            {path:"login" , element:<Login/>}
        ]
    }
])