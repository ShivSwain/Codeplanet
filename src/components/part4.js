import React from 'react';
import Container from "@material-ui/core/container";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    b:
    {
        border:'1px solid red'
    },
    Boxnum1:
    {
        border:'1px solid transparent',
    },
    title1:
    {
        border:'1px solid transparent',
        textAlign:'left',
        textTransform:'uppercase',
        color:'#040f4f',
    },
    title2:
    {
        border:'1px solid transparent',
        position:'relative',
        left:'55px',
        textTransform:'uppercase',
        color:'#040f4f',
        fontWeight:"bolder",

    },
    title3:
    {
        border:'1px solid transparent',
        position:'relative',
        left:'200px',
        fontWeight:"bolder",
        textTransform:'uppercase',
        color:'#040f4f',
    },
    title4:
    {
        border:'1px solid transparent',
        textTransform:'uppercase',
        position:'relative',
        left:'345px',
        color:'#040f4f',
    },
    btn1:
    {
        border:'1px solid white',
        backgroundColor:'#f5a11d',
        color:'white',
        borderRadius:'10px',
        boxShadow:'-1px 1px 5px 2px rgba(0, 0, 0, 0.2)',
        minWidth:'96%',
        padding:'10px',
        margin:'5px 10px',
        fontFamily:'Times new roman',
        fontWeight:'bolder'
    },
    outerbox1:
    {
        padding:'0px 10px',
        boxShadow:'1px 1px 5px 2px rgba(0, 0, 0, 0.2) inset',
        margin:'10px 0px'
    },
    imgs:
    {
        height:'100px',
        padding:'5px',
        width:'155px',
        margin:'0px 20px',
    },
    imgs1:
    {
        maxWidth:'30px',
        maxHeight:'20px',
        padding:'0px 20px'
    },

});

const Part4 = () => {
    const classes = useStyles();


    return(
        <>
            <React.Fragment>
                <Container maxWidth="xl">
                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={6} >
                            <div className={classes.Boxnum1}>
                                <Typography variant='h4' className={classes.title1}> Can't decide</Typography>
                                <Typography variant='h3' className={classes.title2}> which course</Typography>
                                <Typography variant='h3' className={classes.title3}> suits best</Typography>
                                <Typography variant='h4' className={classes.title4}> for you?</Typography>
                                <Button className={classes.btn1}>
                                    CONTACT US:  <img alt='gmail' src="/images/gmail.png" className={classes.imgs1} />   info@codeplanet.co.in
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={5}>
                            <img src="/images/Asset4.png" alt="Asset4" />
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
            <Grid item lg={12} className={classes.outerbox1}>
            <React.Fragment>
                <Container maxWidth="xl">
                    <Grid container >
                        <Grid item lg={1} ></Grid>                    
                        <Grid item lg={2} >
                            <img  alt='LAABh' className={classes.imgs} src='/images/download1.png' />
                        </Grid>
                        <Grid item lg={2} >
                            <img  alt='pardig' className={classes.imgs} src='/images/pg.png' />
                        </Grid>
                        <Grid item lg={2} >
                            <img  alt='NutriScience' className={classes.imgs} src='/images/logo_small-300x140.png' />
                        </Grid>
                        <Grid item lg={2} >
                            <img  alt='Karigars' className={classes.imgs} src='/images/logo.png' />
                        </Grid>
                        <Grid item lg={2} >
                            <img  alt='Shine jewel' className={classes.imgs} src='/images/logo1.png' />
                        </Grid>
                        <Grid item lg={1} ></Grid>                    
                    </Grid>
                </Container>
            </React.Fragment>
            </Grid>
        </>
    );
};

export default Part4;