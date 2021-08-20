import React from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import groceries_image from '../../assets/images/Stocksy_comp_1766526.jpg';
import '../../styles.css';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AuthCheck, useAuth } from 'reactfire';


const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black',
        textDecoration: 'none'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${groceries_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '200%'
    },
    fontLink: {
        fontFamily: "'Dosis', sans-serif"
    }
})

interface Props{
    title: string;
}

export const Home = (props:Props) => {
    const classes = useStyles();
    const auth = useAuth();
    const sign_out = async () => {
        await auth.signOut();
    }

    return (
        <div className={`${classes.root} ${classes.fontLink}`}>
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="/" className={ `${classes.logo_a} ${classes.logo_navigation}` }>PLH</a>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <a href="/" className={classes.nav_a}><HomeIcon /></a>
                        </li>
                        <li>
                            <a href="/partners" className={classes.nav_a}>Partners</a>
                        </li>
                        <AuthCheck fallback={                            
                            <li>
                                <a href="/signin" className={classes.nav_a}>Sign In</a>
                            </li>
                        }>
                        <li>
                            <a href="/dashboard" className={classes.nav_a}>Dashboard</a>
                        </li>
                        <li>
                            <a href="/" className={classes.nav_a} onClick={sign_out}>Sign Out</a>
                        </li>
                        </AuthCheck>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <p>Helping customers find the products they want at local Farmer's Markets</p>
                    <Button color='primary' variant="contained">Click Me</Button>
                </div>
            </main>
        </div>
    )
}