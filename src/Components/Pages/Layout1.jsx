import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout1 = () => {
  return <>
    <CssBaseline />
    <Navbar />
    <Outlet />
  </>;
};

export default Layout1;