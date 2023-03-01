import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const Header = ({ articles }) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.navbar}><Typography variant="h4" component="h2">📰 <strong>NEWS</strong></Typography></div>
            <div className={classes.logoContainer}>
                {articles.length ? (
                    <div className={classes.infoContainer}>
                        <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
                        <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
                    </div>
                ) : null}

                {articles.length ? null : (<img src="https://static8.depositphotos.com/1338574/829/i/600/depositphotos_8292496-stock-photo-news.jpg" className={classes.alanLogo} alt="logo" />)}

            </div>
        </div>

    );
};
export default Header;