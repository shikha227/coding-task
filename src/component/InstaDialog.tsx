import React from 'react';
import {
  Button, GridListTile, DialogContent,
  GridList, Box, Typography, DialogTitle, Dialog, DialogActions
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const tileData = [
  {
    img: 'dialog/image1.png',
    title: 'Image1',
    author: 'author',
    cols: 3,
  },
  {
    img: 'dialog/image3.png',
    title: 'tile.png',
    author: 'author',
    cols: 1,
  },
  {
    img: 'dialog/image3.png',
    title: 'Image3',
    author: 'author',
    cols: 1,
  },
  {
    img: 'dialog/image3.png',
    title: 'image4',
    author: 'author',
    cols: 1,
  },
  {
    img: 'dialog/image5.png',
    title: 'Image5',
    author: 'author',
    cols: 1.5,
  },
  {
    img: 'dialog/image5.png',
    title: 'Image5',
    author: 'author',
    cols: 1.5,
  },
];


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
      margin: theme.spacing(1, 0, 1, 0),
    },
    black: {
      border: "2px solid black",
    },
    white: {
      border: "2px solid white",
    },
    item: {

      width: "100%",


    },
    button: {
      width: '100%',
      display: "flex",
      size: "large",


    },
    cssPurple: {
      color: '#6200EE',
      fontWeight: 'bold',
    }
  }));




export default function InstaDialog() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(Number);


  const handleClose = () => {
    setSelected(selected);
    setOpen(false);

  };

  const handleGridItemClick = (index: number, value: string) => {
    setSelected(index);

  };
  const handleClickOpen = () => {
    setSelected(-1);
    setOpen(true);

  };


  return (
    <Box className={classes.root}>

      <Button variant="outlined" onClick={handleClickOpen} className={classes.button}>
        <Typography variant="button" display="block" gutterBottom>
          Choose Instagram Image
        </Typography>
      </Button>

      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">
          <Typography variant="body2" gutterBottom>
          Select image from your Instagram feed...
        </Typography>
        </DialogTitle>
        <DialogContent>
          <GridList className={classes.black} cols={3}>
            {tileData.map((tile, index) => (
              <GridListTile cols={tile.cols || 1} className={selected === index ? classes.white : classes.black}
                key={`${index}${tile.title}`}
              >
                <img src={tile.img} alt={tile.title} onClick={() => handleGridItemClick(index, tile.title)} />
              </GridListTile>
            ))}
          </GridList>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.cssPurple}>
            Cancel
          </Button>
          <Button onClick={handleClose} className={classes.cssPurple}>
            Select
          </Button>
        </ DialogActions>
      </Dialog>
    </Box>
  )

}