
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
footer: {
    paddingTop: '20px',
    backgroundColor: '#4F3325',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
},

footerCon: {
    margin: '0px 0px 50px 80px',
    color: 'black',
},

footerCon2: {
    margin: '20px 80px 0px 0px',
    color: 'white',
},

footerin: {
    margin: '-16px 80px 0px 0px',
    color: 'white',
},

footerin1: {
    color: 'white',
    "&:hover": {
            color: '#21242a',
        },
},

footerin2: {
    color: 'white',
},

footerin12: {
    fontSize: '30px',
    color: 'white',
    fontFamily: 'nexa',
},

footerin123: {
    fontSize: '20px',
    color: 'white',
    fontFamily: 'nexa',
},

buttonsF: {
    margin: '100px 150px 0px 0px',
    color: 'white',
},

link: {
    margin: '0px 30px 0px 30px',
    color: 'white',
},


'@media (max-width:1650px)': {
    footerin123: {
        fontSize: '15px',
        color: 'white',
        fontFamily: 'nexa',
    },

    footerin12: {
        fontSize: '25px',
        color: 'white',
        fontFamily: 'nexa',
    },

    footerCon: {
        margin: '0px 0px 50px 80px',
        color: 'black',
        fontSize: '12px',
    },
    
    footerCon2: {
        margin: '20px 80px 0px 0px',
        color: 'white',
        fontSize: '12px',
    },

    buttonsF: {
        margin: '70px 110px 0px 0px',
        color: 'white',
    },

    link: {
        margin: '0px 30px 0px 30px',
        color: 'white',
    },
},

'@media (max-width:1050px)': {
    footerin123: {
        fontSize: '12px',
        color: 'white',
        fontFamily: 'nexa',
    },

    footerin12: {
        fontSize: '20px',
        color: 'white',
        fontFamily: 'nexa',
    },

    footerCon: {
        margin: '0px 0px 50px 80px',
        color: 'black',
        fontSize: '10px',
    },
    
    footerCon2: {
        margin: '20px 80px 0px 0px',
        color: 'white',
        fontSize: '10px',
    },

    buttonsF: {
        margin: '60px 10px 0px 0px',
        color: 'white',
    },

    link: {
        margin: '0px 15px 0px 15px',
        color: 'white',
    },
},

'@media (max-width:610px)': {
    footerin123: {
        fontSize: '10px',
        color: 'white',
        fontFamily: 'nexa',
    },

    footerin12: {
        fontSize: '15px',
        color: 'white',
        fontFamily: 'nexa',
    },

    footerCon: {
        margin: '0px 0px 50px 40px',
        color: 'black',
        fontSize: '8px',
    },
    
    footerCon2: {
        margin: '10px 40px 0px 0px',
        color: 'white',
        fontSize: '8px',
    },

    buttonsF: {
        margin: '35px 80px 0px 0px',
        color: 'white',
    },

    link: {
        margin: '0px 10px 0px 10px',
        color: 'white',
    },
},

'@media (max-width:450px)': {
    footerin123: {
        fontSize: '10px',
        color: 'white',
        fontFamily: 'nexa',
    },

    footerin12: {
        fontSize: '15px',
        color: 'white',
        fontFamily: 'nexa',
    },

    footerCon: {
        margin: '0px 0px 50px 20px',
        color: 'black',
        fontSize: '8px',
    },
    
    footerCon2: {
        margin: '10px 10px 0px -100px',
        color: 'white',
        fontSize: '8px',
    },

    buttonsF: {
        margin: '15px 70px 0px -120px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
    },

    link: {
        margin: '0px 10px 0px 10px',
        color: 'white',
    },
},




}))