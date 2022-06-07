import { Container, Typography, Box } from "@mui/material";
import React from "react";
import LoginForm from "../components/loginForm/LoginForm";

const AuthPage = () => {
    return (
        <Container sx={{
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
            alignItems: "flex-end",
        }}>
            <LoginForm />
        </Container>
    )
};

export default AuthPage;