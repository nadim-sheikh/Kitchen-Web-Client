import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import FoodDetails from "../Pages/FoodItems/FoodDetails";
import FoodItems from "../Pages/FoodItems/FoodItems";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/home',
                element:<Home/>
            },
            {
                path: '/food-items',
                element:<FoodItems/>,
                loader: () => fetch('http://localhost:5000/FoodItem'),
            },
            {
                path: '/food-items/:id',
                element:<FoodDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/FoodItem/${params.id}`)
            },
            {
                path: '/signup',
                element:<SignUp/>,
            },
            {
                path: '/login',
                element:<Login/>,
            },
        ]
    }
])



export default router;