import React from 'react';
import Container from "@material-ui/core/container";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    slideshowContainer: 
    {
        maxWidth: '1000px',
        position: 'relative',
        margin: 'auto',
    },
    text1:
    {
        color: '#f2f2f2',
        fontSize: '12px',
        padding: '8px 12px',
        position: 'absolute',
        top: '0',
        width: '100%',
        textAlign: 'center',
    },
      text2:
      {
        color: '#f2f2f2',
        fontSize: '12px',
        padding: '8px 12px',
        position: 'absolute',
        top: '20px',
        width: '100%',
        textAlign: 'center',
      },
      
      /* The dots/bullets/indicators */
      dot:
      {
        height: '15px',
        width:'15px',
        margin: '0px 2px',
        backgroundColor: '#bbb',
        borderRadius: '50%',
        display: 'inline-block',
        transition: 'background-color 0.6s ease'
      },
      
      active:
      {
        backgroundColor: '#717171'
      },
      
      fade:
      {
        animationName: 'fade',
        animationDuration: '1.5s',
      },
      @keyframes fade {
        from {opacity: .4} 
        to {opacity: 1}
      },
      
});

const SliderPart= () => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Container maxWidth="xl">
            <div className={classes.slideshowContainer}>

                <div className={classes.fade} >
                    <div className={classes.text1} >Java Classes available at</div>
                    <div className={classes.text2} >20% OFF</div>
                    <img src="/images/2.png" style={{width:"100%"}} />
                </div>

                <div class="mySlides fade">
                <div className={classes.text1} >Python Classes available at</div>
                    <div className={classes.text2}>20% OFF</div>
                <img src="/images/2.png" style="width:100%" />
                </div>

                <div class="mySlides fade">
                <div className={classes.text1} >DSA Classes available at</div>
                    <div className={classes.text2}>20% OFF</div>
                <img src="/images/2.png" style="width:100%" />
                </div>

            </div>
                <br />

                <div style={{textAlign:center}}>
                <span className={classes.dot} />
                <span className={classes.dot} />
                <span className={classes.dot} />
                </div>
            
            </Container>
        </React.Fragment>
    );
};
export default SliderPart;