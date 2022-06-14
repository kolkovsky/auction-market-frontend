import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../header/Header";
import ParentModal from "../modal/ParentModal";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container className={styles.contentContainer}>
                {children}
            </Container>
        </>
    );
};

export default Layout;
