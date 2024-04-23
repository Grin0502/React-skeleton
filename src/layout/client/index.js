import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { useSelector } from "react-redux";

const ClientLayout = () => {
  const footer = useSelector((state) => state.layout.footer);

  return (
    <>
      <Header />
      <Outlet />
      {footer && <Footer />}
    </>
  );
};

export default ClientLayout;
