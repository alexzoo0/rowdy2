import React from "react";

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';

import useStyles from './style.js';

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.footerCon}>
                <p className={classes.footerin12}>El Rowdy ATX</p>
                <p className={classes.footerin}>Email us: elrowdyatx@gmail.com</p>
                <p className={classes.footerin2}>@ 2021 - 2025 alexzoo0 Web Design.<br/> All rights reserved.</p>
            </div>
            <div className={classes.buttonsF}>
                <IconButton class='button' target="_blank" href='https://www.instagram.com/_elrowdy?igsh=N3R3YThmdmYxbDZj' >
                    <InstagramIcon className={classes.link} fontSize='large' /> 
                </IconButton>
                <IconButton class='button' target="_blank" href='https://www.youtube.com/channel/UCoejH-aWo4qjeK2elSF9Bkg'>
                    <YouTubeIcon className={classes.link} fontSize='large' />
                </IconButton>
                </div>
            <div className={classes.footerCon2}>
                <p className={classes.footerin123}>Policies</p>
                <p className={classes.footerin1}>FAQ</p>
                <p className={classes.footerin1}>Terms & policy</p>
            </div>
        </footer>
    )
}

export default Footer;