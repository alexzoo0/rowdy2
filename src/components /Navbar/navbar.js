import React from "react";
import {  AppBar, Button, Container } from '@material-ui/core';
import useStyles from './style.js';
import { Link } from "react-router-dom";

const Navbar = () => {
    const classes = useStyles();

    

    return (
        <Container className={classes.container}>
            <AppBar  fullwidth style={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
            <div className={classes.flex}>
                <Link to='/'><div className='navlogo'></div></Link>
                <Button href="#contact" className={classes.button}>Products</Button>
                <Button href="#contact" className={classes.button}>About Us</Button>
                <Button href="#contact" className={classes.button}>Shop now</Button>
            </div>
            </AppBar>
        </Container>
    )
}

export default Navbar;