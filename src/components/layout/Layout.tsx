import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../header/Header";
import styles from "./Header.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
