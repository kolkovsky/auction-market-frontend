import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "./LoginForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const RegistrationScheme = Yup.object().shape({
    name: Yup.string().min(4, "Too short!").max(100, "Too long!").required("Required!"),
    role: Yup.string().required("Required!"),
    email: Yup.string()
        .label("Enter your email")
        .min(10, "Too short")
        .email("Invalid email")
        .max(100, "Too long!")
        .required("Required!"),
    password: Yup.string().required("Required!"),
});

const RegistrationForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            role: "",
            email: "",
            password: "",
        },
        validationSchema: RegistrationScheme,
        onSubmit: async () => {},
    });

    return (
        <Box>
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

export default RegistrationForm;
