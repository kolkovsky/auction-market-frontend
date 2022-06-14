import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Button } from "@mui/material"
import Layout from "../components/layout/Layout"

const Home = () => {
    return (
        <Layout>
            <Box>
                <Typography component="h2">
                    Welcome to Auction Market page
                </Typography>
            </Box>
            <Box>
                <Typography component="h4">
                    Tokens
                </Typography>
            </Box>
            <Box>
                <Typography component="h4">
                    Auctions
                </Typography>
            </Box>
        </Layout>
    )
};

export default Home;
