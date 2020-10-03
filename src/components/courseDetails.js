import React from 'react';
import Container from "@material-ui/core/container";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
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
    ulLeftBox:
    {
        backgroundColor: "#040f4f",
        borderTopRightRadius:'30px',
        borderBottomRightRadius:'30px',
        maxWidth:'350px',
        maxHeight:'560px',
        padding:'0px',
    },
    tabs: 
    {
        width:'300px',
    },
    links:
    {    
        borderBottom:'1px solid #f5a11d',
        color:'white',
        fontFamily:'arial',
        fontSize:'15px',
        padding:'15px 0px',
        margin:'0px',
        fontWeight:'bold',
        opacity:'1',
    },
    hNum1:
    {
        textAlign:'center',
        color:'#040f4f',
        fontWeight:'bold',
        padding:'30px 0px 10px'
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
        padding:'5px 20px',
        margin:'auto',
    },
    discountAmt:
    {
        color:'red',
        padding:'5px 0px 5px 45px',
        fontSize:'14px',
        margin:'auto'
    },
    amt:
    {
        fontSize:'14px',
        padding:'0px 45px',
    },
    outterBox:
    { 
        border:'1px solid lightblue',
        borderBottomRightRadius:'20px',
        borderTopRightRadius:'20px',
        position:'relative',
        bottom:'100px'
    },
    hNum2:
    {
        textAlign:'center',
        color:'#040f4f',
        padding:'30px 0px 10px',
        fontWeight:'bolder',
    },
    text2:
    {
        fontSize:'16px',
        textTransform:'capitalize',
        padding:'5px',
        color:'gray'
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
        padding:'0px',
        margin:'0px',
        maxHeight:'550px'
    },
    img1:
    {
        width:'45px',
        position:'relative',
        bottom:'60px',
        right:'18px',
        zIndex:'1'
    }
  });

  function CoursePart(props) {
    const classes = useStyles();
    return(
        <>
            <img src='/images/sale1.png' alt='sales' className={classes.img1} />
            <Paper className={classes.outterBox}>
                <Typography variant='h5' className={classes.hNum1}>{props.CName}</Typography>
                <Typography className={classes.lbel}>
                    <img alt='' src='/images/discount.png' className={classes.imgs} />  10 free content inside
                </Typography>
                <div style={{padding:'10px 0px'}}>
                    <Typography className={classes.dateN} variant='label' >
                        <img alt='icon2' src='/images/sale.png' className={classes.imgs} /> 7 September 2020
                    </Typography>
                    <Typography  className={classes.discountAmt} variant='label' >10% OFF</Typography>
                    <Typography className={classes.amt}>Rs. 11,327 /- <s style={{color:'grayText'}}>Rs. 14,327 /-</s></Typography>
                </div>
                <div style={{padding:'10px 0px'}}>
                    <Typography className={classes.dateN} variant='label' >
                        <img alt='icon2' src='/images/sale.png' className={classes.imgs} /> 7 September 2020
                    </Typography>
                    <Typography  className={classes.discountAmt} variant='label' >33% OFF</Typography>
                    <Typography className={classes.amt}>Rs. 11,327 /- <s style={{color:'grayText'}}>Rs. 14,327 /-</s></Typography>
                </div>
                
                <Typography className={classes.hNum2} variant='h5'>Tools you will learn</Typography>
                <div style={{display:'flex'}}> 
                    <img alt='Cimg' src='/images/tikPic.jpg' className={classes.imgs1} />
                    <Typography className={classes.text2}> java, Eclipse, Apache Tomcat, Github</Typography>
                </div>
                <Grid container spacing={1} style={{padding:'40px 7px 20px 7px'}}>
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


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={5}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`
    };
  }
  

const Course= () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <React.Fragment>
            <Container maxWidth="xl">
                <Typography variant="h5" className={classes.text1} >Our Course</Typography>
                <div className={classes.smline} ></div>
                
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
                    <Grid container spacing={6} style={{marginTop:'30px'}}>
                        <Grid item xs={4} lg={4} className={classes.ulLeftBox}>
                            <Tabs orientation="vertical"
                            onChange={handleChange}
                            className={classes.tabs}
                            >
                            <Tab label="Java" fullWidth={true} className={classes.links} {...a11yProps(0)} />
                            <Tab label="Python" className={classes.links} {...a11yProps(1)} />
                            <Tab label="Machine Learning" className={classes.links} {...a11yProps(2)} />
                            <Tab label="Data Structure & Algorithm" className={classes.links} {...a11yProps(3)} />
                            <Tab label="Web Designing" className={classes.links} {...a11yProps(4)} />
                            <Tab label="c- Programming" className={classes.links} {...a11yProps(5)} />
                            <Tab label="C++" className={classes.links} {...a11yProps(6)} />
                            <Tab label="Ethical hacking" className={classes.links} {...a11yProps(7)} />
                            <Tab label="Android Development" className={classes.links} {...a11yProps(8)} />
                            </Tabs>
                        </Grid>
                        
                        <Grid item xs={4} className={classes.gaps}>
                            <TabPanel value={value} index={0}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <CoursePart CName='Core Python with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <CoursePart CName='Machine Learning' />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <CoursePart CName='Web Designing' />
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={6}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={7}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={8}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                        </Grid>
                        <Grid item xs={4} className={classes.gaps}>
                            <TabPanel value={value} index={0}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <CoursePart CName='Core Python with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <CoursePart CName='Machine Learning' />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <CoursePart CName='Web Designing' />
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={6}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={7}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
                            <TabPanel value={value} index={8}>
                                <CoursePart CName='Core Java with OCJP' />
                            </TabPanel>
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