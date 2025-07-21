import React from "react";
import Navbar from "../../Componentes/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Componentes/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
