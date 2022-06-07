import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "./LoginForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .label("Enter your email")
        .min(10, "Too short")
        .email("Invalid email")
        .max(100, "Too long!")
        .required("Required!"),
    password: Yup.string().required("Required!"),
});

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginSchema,
        onSubmit: async () => {},
    });

    return (
        <Box sx={{ maxWidth: 400, }}>
            <Typography component="h4" sx={{ color: "black" }}>
                Header
            </Typography>
            <form
                className={styles.loginFormContainer}
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    className={styles.textField}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    // @ts-ignore
                    helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    className={styles.textField}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                    }
                    // @ts-ignore
                    helperText={
                        formik.touched.password && formik.errors.password
                    }
                />

                <Button type="submit" color="primary">
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;
