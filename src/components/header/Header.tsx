import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Header = () => {
    return (
        <Box component="div" className={styles.headerContainer}>
            <Box component="div" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Box component="div" className={styles.headerLogoContainer}>
                    <AccountBalanceIcon color="secondary" />
                    <Typography
                        component="h2"
                        sx={{
                            color: "white",
                            marginLeft: 2,
                            textTransform: "uppercase",
                        }}
                    >
                        Auction and Market
                    </Typography>
                </Box>
                <Box>
                    <ul className={styles.headerListLink}>
                        <li className={styles.headerLink}>
                            <Link href="/tokens">
                                <a
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                >
                                    Tokens
                                </a>
                            </Link>
                        </li>
                        <li className={styles.headerLink}>
                            <Link href="/auctions">
                                <a
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                >
                                    Auctions
                                </a>
                            </Link>
                        </li>
                        <li className={styles.headerLink}>
                            <Link href="/users">
                                <a
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                >
                                    Users
                                </a>
                            </Link>
                        </li>
                    </ul>
                </Box>
            </Box>
            <Box>
                <Button>Login</Button>
                <Button>Register</Button>
            </Box>
        </Box>
    );
};

export default Header;
