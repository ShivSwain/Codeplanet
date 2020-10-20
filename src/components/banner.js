import React from 'react';
import Container from "@material-ui/core/container";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bgBannerimg:
    {
        position:'absolute',
        width:'100%',
        zIndex:'-1',
        height:'430px'
    },
    title1:
    {
        border:'1px solid transparent',
        fontWeight:'bolder',
        color:'#040f4f',
        fontSize:'36px',
        margin:'40px 0px 0px ' 

    },
    title2:
    {
        border:'1px solid transparent',
        fontWeight:'bolder',
        color:'#040f4f',
        fontSize:'36px',
        margin:'0px 45px'
    },
    title3:
    {
        border:'1px solid transparent',
        fontWeight:'bolder',
        color:'#040f4f',
        fontSize:'36px',
        margin:'0px 40px'

    },
    title4:
    {
        border:'1px solid transparent',
        color:'#040f4f',
        margin:'0px 136px',
        fontFamily:'arial'
    },
    title5:
    {
        border:'1px solid transparent',
        fontWeight:'bolder',
        color:'#040f4f',
        fontSize:'36px',
        margin:'0px 195px'

    },
    title6:
    {
        border:'1px solid transparent',
        fontWeight:'bolder',
        color:'#040f4f',
        fontSize:'36px',
        width:'160px',
        position:'relative',
        left:'245px'
    },
    smallYellowline:
    {
        borderBottom:'4px solid #f5a11d',
        width:'110px',
        margin:'2px 20px ',

    },
    smallYellowline1:
    {
        borderBottom:'4px solid #f5a11d',
        width:'110px',
        position:'relative',
        left:'325px'
    },
    bannerImg2:
    {
        margin:'40px 0px',
        maxHeight:'350px'
    },
    btn1:
    {
        backgroundColor:'#f5a11d',
        color:'white',
        borderRadius:'20px',
        boxShadow:'-1px 1px 5px 2px rgba(0, 0, 0, 0.2)',
        padding:'10px 20px',
        margin:'35px 20px',
        fontFamily:'Times new roman',
        fontWeight:'bolder',
        '&:hover': 
        {
            backgroundColor:'#f5a11d',
            boxShadow:'-1px 1px 5px 2px rgba(0, 0, 0, 0.5)',
        }
    },
    btn2:
    {
        backgroundColor:'#f5a11d',
        color:'white',
        borderRadius:'20px',
        boxShadow:'-1px 1px 5px 2px rgba(0, 0, 0, 0.2)',
        padding:'10px 20px',
        margin:'35px 20px',
        fontFamily:'Times new roman',
        fontWeight:'bolder',
        '&:hover': 
        {
            backgroundColor:'#f5a11d',
            boxShadow:'-1px 1px 5px 2px rgba(0, 0, 0, 0.5)',
        }
    },
    bannertitle7:
    {
        border:'1px solid white',
        fontWeight:'bold',
        color:'#040f4f',
        borderRadius:'10px',
        boxShadow:'-1px 1px 5px 2px rgba(0, 0, 0, 0.2)',
        position:'relative',
        bottom:'25px',
        width:'500px',
        padding:'15px 50px',
        textAlign:'center',
        backgroundColor:'white',
        margin:'auto'
    },
});

const Banner= () => {
    const classes = useStyles();

    return(
        <>
            <div style={{width:'100%'}}>
                <img src="images/2.png" className={classes.bgBannerimg} />
                <React.Fragment>
                <Container maxWidth="xl">
                   <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5} >
                            <div className={classes.Boxnum1}>
                                <Typography variant='h4' className={classes.title1}> CONTROLLING</Typography>
                                <Typography variant='h4' className={classes.title2}> COMPLEXITY</Typography>
                                    <div className={classes.smallYellowline} ></div>
                                <Typography variant='h5' className={classes.title4}> is the essence of</Typography>
                                <Typography variant='h4' className={classes.title5}> CODE</Typography>
                                <Typography variant='h4' className={classes.title6}> PLANET</Typography>
                                <div className={classes.smallYellowline1} ></div>
                                <Button className={classes.btn1}>
                                    Enroll Now
                                </Button>
                                <Button className={classes.btn2}>
                                    Explore Course
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={5}>
                            <img src="images/1.png" className={classes.bannerImg2} />
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h4' className={classes.bannertitle7}>Free Demo for 15 days</Typography>
                        </Grid>
                    </Grid>
                </Container>
                </React.Fragment>
            </div>
        </>
    );
};
export default Banner;