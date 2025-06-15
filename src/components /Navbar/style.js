import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    flex: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '70px',
        padding: '0px 0px 0px 0px'
    },

    container: {
        marginTop: '0px',
        width: '100%'
    },

    avatar: {
        color: 'white',
        backgroundColor: '#000000',
        margin: '40px 0px -20px 35px',
        fontFamily: 'helvetica',
        padding: '4px 4px 4px 4px',
    },
    button: {
        color: 'white',
        fontFamily: 'nexa',
        backgroundColor: 'black',
        borderRadius: '8px',
        padding: '15px 20px 15px 20px',
        margin: '-30px 40px 40px 0px',
        "&:hover": {
            backgroundColor: "#4F3325",
            color: 'white'
        },
    },

    '@media (max-width:2450px)': {
        button: {
            color: 'white',
            fontFamily: 'nexa',
            fontSize: '12px',
            backgroundColor: 'black',
            borderRadius: '8px',
            padding: '10px 15px 10px 15px',
            margin: '-30px 40px 40px 0px',
            "&:hover": {
                backgroundColor: "#4F3325",
                color: 'white'
            },
        },
    },

    '@media (max-width:1450px)': {
        button: {
            color: 'white',
            fontFamily: 'nexa',
            fontSize: '12px',
            backgroundColor: 'black',
            borderRadius: '8px',
            padding: '5px 10px 5px 10px',
            margin: '-30px 40px 40px 0px',
            "&:hover": {
                backgroundColor: "#4F3325",
                color: 'white'
            },
        },
    },

    '@media (max-width:1050px)': {
        button: {
            color: 'white',
            fontFamily: 'nexa',
            fontSize: '10px',
            backgroundColor: 'black',
            borderRadius: '8px',
            padding: '5px 10px 5px 10px',
            margin: '-30px 40px 40px 0px',
            "&:hover": {
                backgroundColor: "#4F3325",
                color: 'white'
            },
        },
    },

    '@media (max-width:600px)': {
        button: {
            color: 'white',
            fontFamily: 'nexa',
            fontSize: '7px',
            backgroundColor: 'black',
            borderRadius: '4px',
            padding: '2px 5px 2px 5px',
            margin: '-30px 40px 40px 0px',
            "&:hover": {
                backgroundColor: "#4F3325",
                color: 'white'
            },
        },
    },
}))