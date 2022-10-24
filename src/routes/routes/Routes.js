import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../layout/pages/Category/Category";
import Home from "../../layout/pages/Home/Home";
import Login from "../../layout/pages/Login/Login";
import News from "../../layout/pages/News/News";
import Register from "../../layout/pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')

            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params?.id}`)
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])