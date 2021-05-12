import React from "react"
import { Link, Typography, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(1),
    },
    gridItemRight: {
        display: 'flex',
        flex: 'wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    gridItemLeft: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cssPurple: {
        color: '#6200EE',
        fontWeight: 'bold',
    }
}));

type AppProps = {
    keys: string;
    text: string;
    msg: string;
}

const Social: React.FC<AppProps> = ({ keys, text, msg }) => {

    const classes = useStyles();
    
    return (
        <Paper elevation={2} className={classes.paper}>
            <Grid container >
                <Grid item xs={12} lg={8} className={classes.gridItemLeft}>
                    <Typography variant="body2" gutterBottom >
                        {text}
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={4} className={classes.gridItemRight} >
                    {keys === 'tr' && <TwitterIcon color="primary" fontSize="large" />}
                    {keys === 'lr' && <LinkedInIcon color="primary" fontSize="large" />}
                    <Typography variant="button" display="block" gutterBottom>
                        <Link href="#" className={classes.cssPurple}>
                            {msg}
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Paper >
    )
}

export default Social