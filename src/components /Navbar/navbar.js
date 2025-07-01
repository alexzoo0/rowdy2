import { AppBar, Button, Container } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import rLogo from '../../img/RlogoSmallest.png';
import rLogoBig from '../../img/Rlogo.png';
import useStyles from './style.js';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }



    return (
        <Container className={classes.container}>
            <AppBar fullwidth style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <div onClick={goHome} className='bigLogo'>
                    <img
                        src={rLogoBig}
                        alt="El Rowdy Logo"
                        className='bigLogo'
                    />
                </div>
                <div className='mobileMenu'>
                    <div className='navlogo' onClick={goHome} >
                        <img
                            src={rLogo}
                            alt="El Rowdy Logo"
                            className='smallLogo'
                        />
                    </div>
                    <MenuIcon onClick={myFunction} style={{ color: 'black', boxShadow: 'none' }} />
                </div>
                <div id="myLinks" className={classes.flex}>
                    <div className={classes.options}>
                        <Link to='/products'><Button className={classes.button}>Products</Button></Link>
                        <Link to='/aboutUs' ><Button className={classes.button}>About Us</Button></Link>
                        <Button className={classes.button}>Shop now</Button>
                    </div>
                </div>
            </AppBar>
        </Container>
    )
}

export default Navbar;