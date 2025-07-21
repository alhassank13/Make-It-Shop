import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Componentes/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Shop from "./Pages/Shop/Shop";
import Footer from "./Componentes/Footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Pages/Layout/Layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/productDetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  let queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
