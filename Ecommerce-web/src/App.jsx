import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import LandingPage from "./components/landingPage/LandingPage";
import Login from "./components/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/app",
      element: <Layout />,
      children: [
        { path: "/app", element: <Home /> },
        { path: "/app/product", element: <Product /> },
        { path: "/app/cart", element: <Cart /> },
        { path: "/app/login", element: <Login /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
