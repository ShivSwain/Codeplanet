import React from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    img1:
    {
        width:'45px',
        position:'relative',
        bottom:'60px',
        right:'18px',
        zIndex:'1'
    },
    outterBox:
    { 
        border:'1px solid lightblue',
        borderBottomRightRadius:'20px',
        borderTopRightRadius:'20px',
        position:'relative',
        bottom:'100px'
    },
    hNum1:
    {
        textAlign:'center',
        color:'#040f4f',
        fontWeight:'bold',
        padding:'30px 0px 10px'
    },
    lbel:
    {
        color:'red',
        fontSize:'14px',
        textAlign:'center',
        textTransform:'capitalize',
        margin:'5px auto',
    },
    imgs:
    {
        width:'20px',
        position:'relative',
        top:'4px',
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
    hNum2:
    {
        textAlign:'center',
        color:'#040f4f',
        padding:'30px 0px 10px',
        fontWeight:'bolder',
    },
    imgs1:
    {
        width:'25px',
        height:'25px',
        marginLeft:'15px',
        marginTop:'4px'
    },
    text2:
    {
        fontSize:'16px',
        textTransform:'capitalize',
        padding:'5px',
        color:'gray'
    },
    imgs2:
    {
        width:'30px',
        margin:'0px 30px',
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
    gaps:
    {
        padding:'0px',
        margin:'0px',
        maxHeight:'550px'
    },
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
  
  const CourseViewBox= () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(  
        <>
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
        </>
    );
};

export default CourseViewBox;    