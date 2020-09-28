import React from 'react';
import Container from "@material-ui/core/container";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text1:
    {
        marginTop:'30px',
        border:'1px solid transparent',
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bolder',
        color:'#040f4f',
    },
    smline:
    {
        borderBottom:'2px solid #f5a11d',
        width:'60px',
        margin:'auto',
    },
    paper: 
    {
        marginTop:'15px',
        padding:'20px 5px',
        textAlign: 'center',
        border:'2px solid #040f4f',
        color:'#040f4f',
        borderRadius:'18px',
        fontFamily:'arial',
        fontSize:'25px',
        fontWeight:'bolder'
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
        padding:'20px 44px 20px 20px',
        color:'#040f4f',
        fontFamily:'arial',
        fontSize:'25px',
        fontWeight:'bold',
        margin:'0px'
    },
    ulLeftBox:
    {
        maxWidth: 350,
        backgroundColor: "#040f4f",
        borderTopRightRadius:'30px',
        borderBottomRightRadius:'30px'
    },
    links:
    {    
        borderBottom:'1px solid #f5a11d',
        color:'white',
        padding:'5px',
        fontFamily:'arial',
        fontSize:'18px',
        fontWeight:'bolder',
    },
    hNum1:
    {
        textAlign:'center',
        color:'#040f4f',
        fontWeight:'bold',
        padding:'20px 0px 10px'
    },
    imgs:
    {
        width:'20px',
        position:'relative',
        top:'4px',
    },
    imgs1:
    {
        maxWidth:'30px',
        maxHeight:'25px',
        margin:'3px 0px 0px 15px',
        
    },
    imgs2:
    {
        width:'30px',
        margin:'0px 26px ',

    },
    lbel:
    {
        color:'red',
        fontSize:'14px',
        textAlign:'center',
        textTransform:'capitalize',
        margin:'5px auto',
    },
    dateN:
    {
        color:'gray',
        fontSize:'14px',
        padding:'5px 5px',
        margin:'auto',
    },
    discountAmt:
    {
        color:'red',
        padding:'5px 5px',
        fontSize:'14px',
        margin:'auto'
    },
    amt:
    {
        fontSize:'14px',
        padding:'0px 35px',
    },
    outterBox:
    { 
        border:'1px solid lightblue',
        borderBottomRightRadius:'20px',
        borderTopRightRadius:'20px',
    },
    hNum2:
    {
        textAlign:'center',
        color:'#040f4f',
        padding:'20px 0px 0px',
        fontWeight:'bolder',
    },
    text2:
    {
        fontSize:'14px',
        textTransform:'capitalize',
        padding:'5px'
    },
    
    pDetail:
    {
        borderRadius:'10px',
        fontSize:'12px',
        fontWeight:'bolder',
        backgroundColor:'#040f4f',
        color:'white',
        textAlign:'center',
        padding:'5px 0px',

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
    gaps:
    {
        margin:'0px 10px 0px 60px'
    },
    img1:
    {
        width:'45px',
        position:'relative',
        top:'38px',
        right:'18px'
    }
  });

  function CoursePart() {

    const classes = useStyles();
    return(
        <>
            <img src='/images/sale1.png' alt='sales' className={classes.img1} />
            <Paper className={classes.outterBox}>
                <Typography variant='h5' className={classes.hNum1}>Core Java with OCJP</Typography>
                <Typography className={classes.lbel}><img alt='' src='/images/discount.png' className={classes.imgs} />  10 free content inside</Typography>
                <div style={{display:'flex'}}>
                    <Typography className={classes.dateN} ><img alt='icon2' src='/images/sale.png' className={classes.imgs} /> 7 September 2020
                    </Typography>
                    <Typography  className={classes.discountAmt}>10% OFF</Typography>
                </div>
                <Typography className={classes.amt}>Rs. 11,327 /- <s style={{color:'grayText'}}>Rs. 14,327 /-</s></Typography>
                <div style={{display:'flex'}}>
                    <Typography className={classes.dateN} ><img alt='icon2' src='/images/sale.png' className={classes.imgs} /> 7 September 2020
                    </Typography>
                    <Typography  className={classes.discountAmt}>33% OFF</Typography>
                </div>
                <Typography className={classes.amt}>Rs. 11,327 /- <s style={{color:'grayText'}}>Rs. 14,327 /-</s></Typography>

                <Typography className={classes.hNum2} variant='h5'>Tools you will learn</Typography>
                <div style={{display:'flex'}}> 
                    <img alt='Cimg' src='/images/tikPic.jpg' className={classes.imgs1} />
                    <Typography className={classes.text2}> java, Eclipse, Apache Tomcat, Github</Typography>
                </div>
                <Grid container spacing={1} style={{padding:'20px 7px'}}>
                    <Grid item lg={4}>
                    <img alt='no img' src='/images/payment.png' className={classes.imgs2} />
                    <Paper className={classes.pDetail} style={{backgroundColor:'red'}}>EMI Available</Paper>
                    </Grid>
                    <Grid item lg={4}>
                    <img alt='no img' src='/images/search.png' className={classes.imgs2} />
                    <Paper className={classes.pDetail}>Explore More</Paper>
                    </Grid>
                    <Grid item lg={4}>
                    <img alt='no img' src='/images/booking.png' className={classes.imgs2} />
                    <Paper className={classes.pDetail}>Enroll Now</Paper>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
  };

const Course= () => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Container maxWidth="xl">
                <Typography variant="h5" className={classes.text1} >Our Course</Typography>
                <div className={classes.smline} ></div>
                
                <div>
                    <Grid container lg={true} spacing={8}>
                        <Grid item xs={4}>
                        <Paper className={classes.paper} style={{padding:'6px 5px',backgroundColor:'#040f4f',color:'white'}}>Foundaton, Algorithmic <br />& Advanced</Paper>
                        </Grid>
                        <Grid item xs={4}>
                        <Paper className={classes.paper}>Data & Development</Paper>
                        </Grid>
                        <Grid item xs={4} >
                            <div className={classes.paper} style={{display:'flex', padding:'0px',margin:'15px 30px 15px 10px' }}><Typography variant='label' className={classes.text4}>Career Track</Typography> <Typography className={classes.text3}>Limited 50% <br /> Cashback </Typography></div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6} style={{marginTop:'30px'}}>
                        <Grid item xs={4} className={classes.ulLeftBox}>
                            <List component="nav">
                                <ListItem button >
                                <ListItemText className={classes.links} primary="Java" >hello </ListItemText>
                                </ListItem>
                                <ListItem button >
                                <ListItemText primary="Python" className={classes.links} />
                                </ListItem>
                                <ListItem button >
                                <ListItemText primary="Machine Learning" className={classes.links} />
                                </ListItem>
                                <ListItem button >
                                <ListItemText primary="Data Structure & Algorithm" className={classes.links} />
                                </ListItem>
                                <ListItem button >
                                <ListItemText primary="Web Designing" className={classes.links} />
                                </ListItem>
                                <ListItem button >
                                <ListItemText primary="c- Programming" className={classes.links} />
                                </ListItem>
                                <ListItem button >
                                <ListItemText primary="C++" className={classes.links} />
                                </ListItem>
                                <ListItem button >
                                <ListItemText primary="Ethical hacking" className={classes.links} />
                                </ListItem>
                                <ListItem button >
                                <ListItemText primary="Android Development" className={classes.links} />
                                </ListItem>
                            </List>
                        </Grid>
                        
                        <Grid item xs={3} className={classes.gaps}>
                            <CoursePart />
                        </Grid>
                        
                        <Grid item xs={3} className={classes.gaps}>
                        <CoursePart />
                        </Grid>
                        <Grid item xs={1}>
                            <Paper></Paper>
                        </Grid>
                    </Grid>
                </div>

                <Grid container>
                    <Grid item lg={12} className={classes.OuttercomN}>
                        <Typography variant="h5" className={classes.text1} >WHERE OUR ALUMNI WORK</Typography>
                        <div className={classes.smline}  style={{width:'200px'}}></div>

                        <div style={{display:'flex', margin:'40px 0px' }}>
                            <div className={classes.innerComN} ><img alt='Google' src="/images/0000000000001235.png" className={classes.images1} /></div>
                            <div className={classes.innerComN} ><img alt='Amazon' src="/images/0000000000001231.png" className={classes.images1} /></div>
                            <div className={classes.innerComN} ><img alt='Microsoft' src="/images/0000000000001236.png" className={classes.images1} /></div>
                            <div className={classes.innerComN} ><img alt='Adobe' src="/images/0000000000001230.png" className={classes.images1} /></div>
                            <div className={classes.innerComN} style={{marginRight:'0px'}} ><img alt='Morgan' src="/images/0000000000001230.png" className={classes.images1} /></div>
                        </div>

                        <div style={{display:'flex', margin:'40px 0px' }}>
                            <div className={classes.innerComN} ><img alt='Flipkart' src="/images/0000000000001233.png" className={classes.images1} /></div>
                            <div className={classes.innerComN} ><img alt='Samsung' src="/images/0000000000001238.png" className={classes.images1} /></div>
                            <div className={classes.innerComN} ><img alt='Expedia' src="/images/0000000000001232.png"   className={classes.images1} /></div>
                            <div className={classes.innerComN} ><img alt='OYO' src="/images/0000000000001342.png" style={{position:'relative',bottom:'25px'}} className={classes.images1} /></div>
                            <div className={classes.innerComN} style={{marginRight:'0px'}} ><img alt='Walmart' src="/images/0000000000001239.png" className={classes.images1} /></div>
                        </div>
                        
                    </Grid>
                    <div style={{margin:'0px 140px',width:'100%'}}>
                        <Typography variant="h5" className={classes.text1} >EXCLUSIVE FEATURE</Typography>
                        <div className={classes.smline} style={{width:'180px'}}></div>
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