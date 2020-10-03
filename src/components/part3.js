import React from 'react';
import Container from "@material-ui/core/container";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    bgbox:
    {
        height:'375px',
        backgroundColor:'#f5f5f5',
        margin:'40px 0px 120px 0px'
    },
    box1:
    {
        margin:'50px auto',
    },
    imgBox:
    {
        margin:'0px 10px',
        backgroundColor:'white',
        height:'200px',
        boxShadow:'-1px 1px 5px 2px rgba(0, 0, 0, 0.1)',

    },
    hNum1:
    {
        backgroundColor:'#040f4f',
        color:'white',
        fontSize:'16px',
        textAlign:'center',
        padding:'5px',
    },
    descbox:
    {
        margin:'0px 10px',
        padding:'5px 0px',
        backgroundColor:'white',
        textAlign:'center',
        fontSize:'14px',
        color:'gray',
        boxShadow:'-1px 1px 5px 2px rgba(0, 0, 0, 0.1)',
    
    },
    imgs:
    {
        maxHeight:'150px',
        margin:'25px 90px'
    }
});

const Part3=() => {
    const classes = useStyles();
    
    return (
    <>
      <div className={classes.bgbox}>
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid container >
                    <Grid item xs={4} style={{padding:'0px 40px'}}>
                        <div className={classes.box1}>
                            <div className={classes.imgBox}>
                                <img alt="imgs" src="/images/interview.png" className={classes.imgs} />
                            </div>
                            <Typography className={classes.hNum1} variant='h6' >Exceptional Faculty</Typography>
                            <Typography className={classes.descbox} variant='h6' >
                                Our Faculty is from the best<br />
                                institutes around the world<br />
                                such as IITD, Stanford and <br />
                                more. They also have work <br />
                                experience in tech giants like<br />
                                Amazon, Facebook, Adobe<br />
                                which makes them exceptional.
                            </Typography>

                        </div>
                    </Grid>
                    <Grid item xs={4} style={{padding:'0px 40px'}}>
                        <div className={classes.box1}>
                            <div className={classes.imgBox}>
                                <img alt="imgs" src="/images/teach.png" className={classes.imgs} />
                            </div>
                            <Typography className={classes.hNum1} variant='h6' >Mentor Support</Typography>
                            <Typography className={classes.descbox} variant='h6' >
                                Our Faculty is from the best<br />
                                institutes around the world<br />
                                such as IITD, Stanford and <br />
                                more. They also have work <br />
                                experience in tech giants like<br />
                                Amazon, Facebook, Adobe<br />
                                which makes them exceptional.
                            </Typography>

                        </div>
                    </Grid>
                    <Grid item xs={4} style={{padding:'0px 40px'}}>
                        <div className={classes.box1}>
                            <div className={classes.imgBox}>
                                <img alt="imgs" src="/images/online-class.png" className={classes.imgs} />
                            </div>
                            <Typography className={classes.hNum1} variant='h6' >Course Curriculum</Typography>
                            <Typography className={classes.descbox} variant='h6' >
                                Our Faculty is from the best<br />
                                institutes around the world<br />
                                such as IITD, Stanford and <br />
                                more. They also have work <br />
                                experience in tech giants like<br />
                                Amazon, Facebook, Adobe<br />
                                which makes them exceptional.
                            </Typography>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
      </div> 
    </> 
      );
};

export default Part3;