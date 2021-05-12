import React from 'react';
import { Button,Grid,Box,Typography,FormControlLabel,FormGroup,Switch} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InstaDialog from './InstaDialog';
import AddIcon from '@material-ui/icons/Add';
import CustomCard from './CustomCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
  
    },

    item: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    uploadArtWork: {
        color: '#BB1FA2',
        width: '100%',
        justifyContent: 'center',
        size: "large",
    },


    textField: {
        width: '100%',
        justifyContent: 'center',
    },
    gridItemRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    gridItemLeft: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    info: {
        margin: theme.spacing(2, 0, 0, 0),
    },

    cssLabel: {
        color: '#BB1FA2',
    },
    cssPurple: {
        color: '#6200EE',
        fontWeight: 'bold',
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `${theme.palette.primary.main} !important`,
        }
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '1px',
        borderColor: '#BB1FA2 !important'
    },
  
}));


export default function MintingSection(){
  const classes = useStyles();
 const [checked, setChecked] = React.useState(false);

  
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };



return(
  <div>
      <Grid className={classes.root} container >
        <Grid item xs={12} md={6} lg={6} className={classes.item}>
             
       <Box>
		          <Typography variant="h6" gutterBottom>

Mint your own authentic NFTs</Typography>
               
		 <Typography variant="body2" gutterBottom>
		Upload an image, add a description and select if
		you want to mint a free test NFT or a paid, real one.
		The NFT will be saved in your wallet,.
    </Typography>
                   
                    </Box>
                <Box>

                    <Button className={classes.uploadArtWork} variant="outlined" size="large"
startIcon={<AddIcon />}>Upload Artwork</Button>
 
 <InstaDialog/>
                </Box >
                <Box>
                    <TextField
                        label="label"
                        id="outlined-size-normal"
                        defaultValue="Description"
                        variant="outlined"
                        inputProps={
                            { readOnly: true, }
                        } className={classes.textField}

                        InputLabelProps={{
                            classes: {
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            },
                        }}
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                            },
                            inputMode: "numeric"
                        }}
                    />
                    </Box>
                    <Grid container>
                        <Grid item xs={8} md={6} lg={6} className={classes.gridItemLeft}>
                            <Typography variant="subtitle1" gutterBottom>
                                Use TestNet (free) </Typography>
                        </Grid>

                        <Grid item xs={4} md={6} lg={6} className={classes.gridItemRight} >
                            <FormGroup >
                                <FormControlLabel label=""
                                    control={<Switch checked={checked} onChange={toggleChecked} />}

                                />
                            </FormGroup>

                        </Grid>
                    </Grid>
                    </Grid>
            <Grid item xs={12} md={6} lg={6} className={classes.item} >
<CustomCard />

                <Box width="90%" className={classes.info}>
 <TextField  id="outlined-size-normal"
          defaultValue="<Your Wallet Address>"
          variant="outlined"
          inputProps={
          { readOnly: true, }
        }  className={classes.textField}  
        />
  </Box>
       <Typography variant="subtitle2" gutterBottom>
 Your wallet adress on Algorand [mainnet | Testnet]</Typography>

 <Grid  container className={classes.info}>  
                    <Grid item xs={12}  md={9} lg={10}>
 <Typography variant="button" display="block" gutterBottom>

                        I Need More Information 
                      </Typography> 
                    </Grid>
                    <Grid item xs={12} md={3} lg={2} >
<Typography variant="button" display="block" gutterBottom   className={classes.cssPurple}>
                        MINT NFT
                      </Typography> 
</Grid>
</Grid >



        </Grid>
          </Grid>
 </div>         

		)
}
