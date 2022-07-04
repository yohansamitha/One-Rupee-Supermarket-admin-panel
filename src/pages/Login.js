import {useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Box, Button, Container, TextField, Typography} from '@material-ui/core';
import React from "react";
import AuthService from "../services/AuthService";

const Login = () => {
        const navigate = useNavigate();
        let authService = new AuthService();

        return (
            <>
                <Helmet>
                    <title>One Rupee Login</title>
                </Helmet>
                <Box
                    sx={{
                        backgroundColor: 'background.default',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center'
                    }}
                >
                    <Container maxWidth="sm">
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                password: Yup.string().max(255).required('Password is required')
                            })}
                            onSubmit={async (values, {resetForm}) => {
                                await authService.userLogin(values.email, values.password)
                                    .then(function (response) {
                                        sessionStorage.setItem('token', response.data.token)
                                        sessionStorage.setItem('fullName', response.data.fullName)
                                        sessionStorage.setItem('userType', response.data.userType)
                                        sessionStorage.setItem('authStatus', 'true')
                                        if (response.status === 202) {
                                            if (response.data.userType === 'ADMIN') {
                                                navigate('/admin/dashboard', {replace: true});
                                            } else {
                                                navigate('/cashier/dashboard', {replace: true});
                                            }
                                        }
                                    }).catch(function (error) {
                                        console.log(error);
                                        sessionStorage.clear();
                                        window.location.reload();
                                    }).then(function () {
                                        resetForm();
                                    })
                            }}
                        >
                            {({
                                  errors,
                                  handleBlur,
                                  handleChange,
                                  handleSubmit,
                                  isSubmitting,
                                  touched,
                                  values
                              }) => (
                                <form onSubmit={handleSubmit}>
                                    <Box sx={{mb: 1}}>
                                        <Typography
                                            color="textPrimary"
                                            variant="h2"
                                        >
                                            Sign in
                                        </Typography>
                                    </Box>
                                    <TextField
                                        error={Boolean(touched.email && errors.email)}
                                        fullWidth
                                        helperText={touched.email && errors.email}
                                        label="Email Address"
                                        margin="normal"
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="email"
                                        value={values.email}
                                        variant="outlined"
                                    />
                                    <TextField
                                        error={Boolean(touched.password && errors.password)}
                                        fullWidth
                                        helperText={touched.password && errors.password}
                                        label="Password"
                                        margin="normal"
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="password"
                                        value={values.password}
                                        variant="outlined"
                                    />
                                    <Box sx={{py: 2}}>
                                        <Button
                                            color="primary"
                                            disabled={isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                        >
                                            Sign in now
                                        </Button>
                                    </Box>
                                    {/*<Typography*/}
                                    {/*    color="textSecondary"*/}
                                    {/*    variant="body1"*/}
                                    {/*>*/}
                                    {/*    Don&apos;t have an account?*/}
                                    {/*    {' '}*/}
                                    {/*    <Link component={RouterLink} to="/register" variant="h6" underline="hover">*/}
                                    {/*        Sign up*/}
                                    {/*    </Link>*/}
                                    {/*</Typography>*/}
                                </form>
                            )}
                        </Formik>
                    </Container>
                </Box>
            </>
        );
    }
;

export default Login;
