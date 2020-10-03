import React from 'react';
import Container from "@material-ui/core/container";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    head1:
    {
        color:'#f5a11d',
        borderBottom:'1px solid',
        fontWeight:'bold',
        fontSize:'18px',
        letterSpacing:'1px',
        margin:'5px 11px'
    },
    desc:
    {
        color:'white',
        fontSize:'15px',
        margin:'5px 11px',
    },
    listbox:
    {
        border: "0px solid",
        padding:'2px'
    },
    items:
    {
        padding:'0px',
        fontSize:'16px',
        color:'white'
    },
    arrowicon:
    {
        color:'black',
        fontSize:'12.5px',
        color:'white',
        padding:'0px 5px'
    },
    imgs:
    {
        maxWidth:'25px',
        maxHeight:'22px',
        padding:'0px 10px'
    },
    imgs1:
    {
        maxWidth:'25px',
        maxHeight:'30px',
        margin:'5px 5px',
    },
    boxnum1:
    {
        borderTop:'1px solid white',
        padding:'15px 0px 0px 0px',
        margin:'30px 0px 0px 0px'
    },
    text1:
    {
        color:'white',
        textAlign:'center'
    },
    icons:
    {
        position:'relative',
        top:'3px',
        fontSize:'18px'

    },


});

function Linkitems(props)
{
    const classes = useStyles();
    return(
        <>          
                <ListItem button className={classes.listbox}>
                    <ArrowForwardIosIcon className={classes.arrowicon} />
                    <ListItemText primary={props.linkName} className={classes.items} />
                </ListItem>
        </>
    );
}

const Footer=() => {
    const classes = useStyles();
    
    return (
    <>
        <div style={{backgroundColor:'#040f4f', padding:'10px'}}>
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid container >
                    <Grid item xs={3} className={classes.b}>
                        <div>
                            <Typography className={classes.head1} variant='label'>About</Typography>
                        </div>
                        <Typography className={classes.desc}>
                            Code Planet Technologies <br /> 
                            Pvt Ltd is a Software Train- <br />
                            ing & Development organi-<br />
                            zation located in Pratap <br />
                            Nagar Jaipur. In Training <br />
                            Sector we believe to enrich <br />
                            the knowledge skill sets of<br />
                            young software engineer by<br />
                            providing value-added<br />
                            training in the areas of soft-<br />
                            ware Development. Our <br />
                            training is completely <br />
                            industry-oriented and inter-<br />
                            view oriented. 
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.b}>
                        <Typography className={classes.head1} variant='label' >CodePlanet</Typography>
                        <div>
                            <List component="nav" >
                                <Linkitems linkName='Home' />
                                <Linkitems linkName='About Us'/>
                                <Linkitems linkName='Services'/>
                                <Linkitems linkName='Blog'/>
                                <Linkitems linkName='Privacy Policy'/>
                                <Linkitems linkName='Contact Us'/>
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={classes.b}>
                        <Typography className={classes.head1} variant='label' >Service</Typography>
                        <div>
                            <List component="nav" >
                                <Linkitems linkName='Classroom Training' />
                                <Linkitems linkName='Online Training'/>
                                <Linkitems linkName='Corporate Training'/>
                                <Linkitems linkName='On-Campus Training'/>
                                <Linkitems linkName='Placement & Staffing'/>
                                <Linkitems linkName='Workshops'/>
                                <Linkitems linkName='IT Consultinh & Development'/>
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={3} className={classes.b}>
                        <Typography className={classes.head1} variant='label' >Contact Us</Typography>
                        <div>
                            <List component="nav">
                            <ListItem button className={classes.listbox}>
                                <img alt='' src='/images/gmail.png' className={classes.imgs} />
                                <ListItemText primary='info@codeplanet.co.in' className={classes.items} />
                            </ListItem>                           
                            <ListItem button className={classes.listbox}>
                                <img alt='' src='/images/phone (2).png' className={classes.imgs} />
                                <ListItemText primary='+91-86191-30803' className={classes.items} />
                            </ListItem>
                            <ListItem button className={classes.listbox}>
                            <span>
                            <img alt='' src='/images/gps.png' className={classes.imgs} style={{ position:'relative',bottom:'48px'}} />
                            </span>
                                <ListItemText className={classes.items} > 
                                    Khushi Tower, 1st floor,<br />
                                    Kumbha Marg,<br />
                                    Pratap Nagar, <br />
                                    Jaipur,Rajasthan,<br />
                                    302033
                                </ListItemText>
                            </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={classes.b}>
                        <Typography className={classes.head1} variant='label' >Follow Us On</Typography>
                        <div style={{margin:'10px 0px'}}>
                            <span>
                                <img src='/images/linkedin.png' className={classes.imgs1} /> 
                            </span>
                            <span>
                                <img src='/images/facebook.png' className={classes.imgs1} /> 
                            </span>
                            <span>
                                <img src='/images/instagram-sketched.png' className={classes.imgs1} /> 
                            </span>
                            <span>
                                <img src='/images/youtube.png' className={classes.imgs1} /> 
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.boxnum1}>
                       <Typography className={classes.text1}> <CopyrightIcon className={classes.icons} /> CodePlanet Technologies Pvt Ltd. | All Rights Reserved</Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
        </div>
    </>
    );
};

export default Footer;