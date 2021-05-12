import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions,Button,CardMedia} from "@material-ui/core";



const useStyles = makeStyles({

    card: {
    position: "relative",
  },
  size: {
      width: '100%',
      height: "100%",
  },
overlay: {
    position:'absolute',
width:'100%',
height:'20%%',
              // backgroundColor:'rgba(255, 255, 255, 0.3)',
               backgroundColor:'rgba(192,192,192,0.9)',
               color:'black',
               bottom:'0',
               left:'0',
               

    
   }
});


 export default  function CustomCard(props: any) {
  const classes = useStyles();
    return (  
      <div >
      <Card className={classes.card} >
      <CardMedia >
  <img src='./tile.png' className={classes.size} alt=""/>
</CardMedia>
         <CardActions className={classes.overlay}>
         <Button  size="large"
>Image Preview</Button>
        
  </CardActions>
</Card>
     </div> 
   
                  
    );
}
