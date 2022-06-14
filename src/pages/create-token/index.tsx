import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import Layout from "../../components/layout/Layout";
import { Erc20Token } from "../../models/token";
import styles from "./CreateToken.module.css";
import * as Yup from "yup";

const createTokenScheme = Yup.object().shape({
    name: Yup.string()
        .min(6, "Too short!")
        .max(30, "Too long!")
        .required("Required!"),
    symbol: Yup.string()
        .min(3, "Too short!")
        .max(30, "Too long!")
        .required("Required!"),
    amountTokens: Yup.number().min(1, "Too short!").max(1000, "Too much!").required("Required!"),
});

const CreateTokenPage = () => {
    const formik = useFormik<Erc20Token>({
        initialValues: {
            name: "",
            symbol: "",
            amountTokens: 0,
        },
        validationSchema: createTokenScheme,
        onSubmit: () => {},
    });

    return (
        <Layout>
            <Typography component="h1" className={styles.createTokenHeader}>Create ERC-20 Token</Typography>
            <Box component="div" className={styles.createTokenFormContainer}>
                <form
                    className={styles.createTokenForm}
                    onSubmit={formik.handleSubmit}
                >
                    <TextField
                        id="name"
                        name="name"
                        label="Token name"
                        type="text"
                        className={styles.textField}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                        // @ts-ignore
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                        id="symbol"
                        name="symbol"
                        label="Token symbol"
                        type="text"
                        className={styles.textField}
                        value={formik.values.symbol}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.symbol &&
                            Boolean(formik.errors.symbol)
                        }
                        // @ts-ignore
                        helperText={
                            formik.touched.symbol && formik.errors.symbol
                        }
                    />

                    <TextField
                        id="amountTokens"
                        name="amountTokens"
                        label="Amount of Tokens"
                        type="number"
                        className={styles.textField}
                        value={formik.values.amountTokens}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.amountTokens &&
                            Boolean(formik.errors.amountTokens)
                        }
                        // @ts-ignore
                        helperText={
                            formik.touched.amountTokens &&
                            formik.errors.amountTokens
                        }
                    />

                    <Button type="submit" color="primary" variant="contained" className={styles.submitButton}> 
                        Mint Token
                    </Button>
                </form>
            </Box>
        </Layout>
    );
};

export default CreateTokenPage;
