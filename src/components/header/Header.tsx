import { Box, Container, Typography } from "@mui/material"
import React from "react"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <Box component="div" className={styles.headerContainer}>
            <Typography component="h4" sx={{ color: "white" }}>
                Header
            </Typography>
        </Box>
    )
}

export default Header
