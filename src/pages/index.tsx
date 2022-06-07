import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Button } from "@mui/material"
import Header from "../components/header/Header"

const Home = () => {
    return (
        <Container>
            <Header />
            <Box>
                <Typography>Login Form</Typography>
                <Button>Login</Button>
            </Box>
        </Container>
    )
};

export default Home;
