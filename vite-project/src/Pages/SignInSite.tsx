import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom';
import $ from 'jquery';

import Logo from "../assets/logo1.jpg";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {

    const navigate = useNavigate();
    const [result, setResult] = useState(false);
    //setResult(true);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        console.log('you clicked submit');
        // getting result from php
        const form = $(event.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success (data){
                setResult(data);
            }
        })


    };

    const redirectToFilesPage = ()=>{
        //if result from php is true redirect to files page
        if (result == true){
            navigate('/1');
            //console.log($.data);
        }else{
            alert("Błędny Login lub Hasło");
            alert(result);
        }
    }

    useEffect(() => {
        // skipping the change on render
        if (result){
            redirectToFilesPage();
        }
    }, [result]);


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                {/* /////////// Left side of page ////////// */}
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${Logo})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* //////////// Right side od page ///////// */}
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        {/* /////// Form Header ///////////// */}
                        <Typography component="h1" variant="h5">
                            Zaloguj się
                        </Typography>

                        {/* /////////// Login Form //////////////// */}
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} action={"http://localhost:8000/NewLogin.php"} method={"POST"}>

                            {/* ///////////// Login Input ///////////// */}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="loginInput"
                                label="Login"
                                name="loginInput"
                                autoComplete="email"
                                autoFocus
                            />

                            {/* /////////// Password Input /////////// */}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="passwdInput"
                                label="Hasło"
                                type="password"
                                id="passwdInput"
                                autoComplete="current-password"
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Zapamiętaj mnie"
                            />

                            {/* ////////// Submit Button /////////// */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Zaloguj się
                            </Button>

                            {/* Jakieś gówno */}
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}