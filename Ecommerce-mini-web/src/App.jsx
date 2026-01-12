import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/product", element: <Product /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
