import React from 'react';
import Container from "@material-ui/core/container";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import CourseViewBox from "./CourseViewBox";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Heading_text1:
    {
        marginTop:'30px',
        border:'1px solid transparent',
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bolder',
        color:'#040f4f',
    },
    smallYellowline:
    {
        borderBottom:'2px solid #f5a11d',
        width:'60px',
        margin:'auto',
    },
    paper: 
    {
        marginTop:'15px',
        padding:'18px 5px',
        textAlign: 'center',
        border:'2px solid #040f4f',
        color:'#040f4f',
        borderRadius:'18px',
        fontFamily:'arial',
        fontSize:'22px',
        fontWeight:'bold'
    },
    text3:
    {
        fontSize:'16px',
        backgroundColor:'#f5a11d',
        color:'white',
        padding:'10px',
        margin:'0px',
        borderBottomRightRadius:'16px',
        borderTopRightRadius:'16px'
    },
    text4:
    {
        padding:'10px 62px 10px 20px',
        color:'#040f4f',
        fontFamily:'arial',
        fontSize:'25px',
        fontWeight:'bold',
        margin:'0px'
    },

    OuttercomN:
    {
        margin:'50px 140px 30px',
        borderTop:'1px solid gray',
        borderBottom:'1px solid gray',
    },
    innerComN:
    {
        padding:'5px',
        boxShadow:'-5px 4px 4px 5px rgba(0, 0, 0, 0.2)',
        borderBottomRightRadius:'50px',
        width:'150px',
        height:'50px',
        marginRight:'auto',
    },
    images1:
    {
        width:'100px',
        heigth:'10px',
        padding:'0px 20px'
    },
    description1:
    {
        textAlign:'center',
        color:'gray',
        padding:'20px 5px',
        
    },
  });



const Course= () => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Container maxWidth="xl">
                <Typography variant="h5" className={classes.Heading_text1} >Our Course</Typography>
                <div className={classes.smallYellowline} ></div>
                
                <div>
                    <Grid container lg={true} spacing={8}>
                        <Grid item xs={4}>
                        <Typography className={classes.paper} 
                                    style={{padding:'2px 5px',backgroundColor:'#040f4f',color:'white'}}>Foundaton, Algorithmic <br />& Advanced</Typography>
                        </Grid>
                        <Grid item xs={4}>
                        <Typography className={classes.paper}>Data & Development</Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography className={classes.paper} style={{display:'flex', padding:'0px',margin:'15px 10px 15px 10px' }}>
                                <Typography variant='label' className={classes.text4}>Career Track</Typography> 
                                <Typography className={classes.text3}>Limited 50% <br /> Cashback </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* CourseViewBox PART */}
                    <CourseViewBox />
                </div>

                <Grid container>
                    <Grid item lg={12} className={classes.OuttercomN}>
                        <Typography variant="h5" className={classes.Heading_text1} >WHERE OUR ALUMNI WORK</Typography>
                        <div className={classes.smallYellowline}  style={{width:'200px'}}></div>

                        <div style={{display:'flex', margin:'40px 0px' }}>
                            <div className={classes.innerComN} >
                                <img alt='Google' src="/images/0000000000001235.png" className={classes.images1} />
                            </div>
                            <div className={classes.innerComN} >
                                <img alt='Amazon' src="/images/0000000000001231.png" className={classes.images1} />
                            </div>
                            <div className={classes.innerComN} >
                                <img alt='Microsoft' src="/images/0000000000001236.png" className={classes.images1} />
                            </div>
                            <div className={classes.innerComN} >
                                <img alt='Adobe' src="/images/0000000000001230.png" className={classes.images1} />
                            </div>
                            <div className={classes.innerComN} style={{marginRight:'0px'}} >
                                <img alt='Morgan' src="/images/0000000000001230.png" className={classes.images1} />
                            </div>
                        </div>

                        <div style={{display:'flex', margin:'40px 0px' }}>
                            <div className={classes.innerComN} >
                                <img alt='Flipkart' src="/images/0000000000001233.png" className={classes.images1} />
                            </div>
                            <div className={classes.innerComN} >
                                <img alt='Samsung' src="/images/0000000000001238.png" className={classes.images1} />
                            </div>
                            <div className={classes.innerComN} >
                                <img alt='Expedia' src="/images/0000000000001232.png"   className={classes.images1} />
                            </div>
                            <div className={classes.innerComN} >
                                <img alt='OYO' src="/images/0000000000001342.png" style={{position:'relative',bottom:'25px'}} className={classes.images1} />
                            </div>
                            <div className={classes.innerComN} style={{marginRight:'0px'}} >
                                <img alt='Walmart' src="/images/0000000000001239.png" className={classes.images1} />
                            </div>
                        </div>
                        
                    </Grid>
                    <div style={{margin:'0px 140px',width:'100%'}}>
                        <Typography variant="h5" className={classes.Heading_text1} >EXCLUSIVE FEATURE</Typography>
                        <div className={classes.smallYellowline} style={{width:'180px'}}></div>
                        <Typography  className={classes.description1} >
                            Our Approach for technology Training recognises critical IT Skills which provides early and mid<br /> 
                            career professionals opportunities to excel in their Careers. The Course curriculum  is designed<br />  
                            considering key and emerging technologies and is advised by Industry Experts. The course enable Raw<br /> 
                             Freshers to be industry ready. 
                        </Typography>
                    </div>
                </Grid>

            </Container>
        </React.Fragment>
    );
};

export default Course;