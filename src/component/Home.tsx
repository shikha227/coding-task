import React, { FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MintingSection from './MintingSection';
import {Paper} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Social from './Social'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems :'center',
    '& > *': {
      margin: theme.spacing(5)
    },
  },
     paper: {
      padding: theme.spacing(1),

  },



}));

const linkedinText = "Connect your linkedin account and increase your authenticity score."
const twitterText = "Connect your twitter account and increase your authenticity score."
const downloadText = "Download kollektor.io wallet and connect your phone."
const connectText = "CONNECT"
const downloadWalletText ="Download Wallet"

  const Home:FC = ()=> {
  const classes = useStyles();
   
  return (
   <Grid container  className={classes.root} > 
        
      <Grid item xs={12} md={9} lg={7} >
              <Paper elevation={2} >
                
                  <Social keys={'lr'} text={linkedinText} msg={connectText} />
                  <Social keys={'tr'} text={twitterText} msg={connectText}/>
                  <Social keys={'dummy'} text={downloadText} msg={downloadWalletText} />
      <MintingSection/>
      </Paper>
      </Grid>
     
    </Grid>
  );
}
export default Home;