import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    flex: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '58px',
        padding: '0px 0px 0px 0px'
    },

    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },


    container: {
        marginTop: '40px',
        width: '100%'
    },

    options: {
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '-150px 0px 0px 0px',
        },

    button: {
        color: 'white',
        fontFamily: 'nexa',
        backgroundColor: 'black',
        borderRadius: '8px',
        height: '50px',
        width: '150px',
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

        options: {
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '-90px 0px 0px 0px',
        },
    },

    '@media (max-width:1450px)': {
        flex: {
            display: 'block',
            padding: '0px 0px 0px 0px',
        },

        options: {
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '-90px 0px 0px 0px',
        },
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

        flex: {
            display: 'block',
            padding: '0px 0px 0px 0px',
        },

        options: {
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '-90px 0px 0px 0px',
        },

        button: {
            width: '100px',
            height: '50px',
            color: 'white',
            fontFamily: 'nexa',
            fontSize: '10px',
            backgroundColor: 'black',
            borderRadius: '8px',
            padding: '3px 8px 3px 8px',
            margin: '-35px 40px 40px 0px',
            "&:hover": {
                backgroundColor: "#4F3325",
                color: 'white'
            },
        },

        link: {
            padding: '0px',
        },
    },

    '@media (max-width:600px)': {

        flex: {
            display: 'block',
            padding: '0px 0px 0px 0px',
        },

        options: {
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '-100px 0px 0px 0px',
        },

        button: {
            width: '90px',
            height: '30px',
            color: 'white',
            fontFamily: 'nexa',
            fontSize: '7px',
            backgroundColor: 'black',
            borderRadius: '4px',
            padding: '2px 5px 2px 5px',
            margin: '0px 20px 40px 0px',
            "&:hover": {
                backgroundColor: "#4F3325",
                color: 'white'
            },
        },
    },

    '@media (max-width:450px)': {
        container: {
            marginTop: '50px',
            marginBottom: '-30px',
            width: '100%',
        },

        button: {
            width: '70px',
            height: '20px',
            color: 'white',
            fontFamily: 'nexa',
            fontSize: '7px',
            backgroundColor: 'black',
            borderRadius: '4px',
            padding: '2px 5px 2px 5px',
            margin: '-10px 20px 40px 0px',
            "&:hover": {
                backgroundColor: "#4F3325",
                color: 'white'
            },
        },

        flex: {
            display: 'none',
            padding: '0px 0px 0px 0px',
        },

         options: {
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '-40px 0px 0px 0px',
        },

        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        rightSide: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
        },
        menuIcon: {
            cursor: 'pointer',
            fontSize: '32px',
            color: 'black',
        },


    },
}))