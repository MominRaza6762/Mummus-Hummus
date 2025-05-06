import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Navbar from "../components/navbar/navbar";

const MainLayout = () => {
  return (
    <>
      <div className={styles.layoutcontainer}>
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
