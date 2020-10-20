import React from 'react';
import Container from "@material-ui/core/container";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    b:
    {
        border:'1px solid'
    },
    text1:
    {
        marginTop:'40px',
        border:'1px solid transparent',
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bolder',
        color:'#040f4f',
    },
    smline:
    {
        borderBottom:'2px solid #f5a11d',
        width:'50px',
        margin:'auto',
    },
    root: 
    {
        minWidth: "150px",
        maxHeight:'400px',
        margin:'0px 10px',
        border:'1px solid white',
        backgroundColor:'#f5a11d',
        color:'white',
        borderRadius:'10px',
        boxShadow:'-1px 1px 5px 4px rgba(0, 0, 0, 0.2)',
        overflow:'visible',
    },
    title: 
    {
        color:'white',
    },
    imgs1:
    {
        maxWidth:'40px',
        maxHeight:'22px',
        position:'relative',
        top:'2px',
        padding:'0px 3px'
    },
    imgs2:
    {
        maxWidth:'20px',
        maxHeight:'10px',
        position:'relative',
        top:'0',
        padding:'0px 6px'
    },
    Pview:
    {
        position:'relative',
        
        marginRight:'20px'
    },
    Mbox:
    {
        position:'relative',
        
        marginRight:'70px'
    },
    likes:
    {
        position:'relative',
        
    },
    imgBox:
    {
       
        color:'white',
        borderRadius:'16px',
        border:'1px solid white',
        boxShadow:'-1px 1px 5px 4px rgba(0, 0, 0, 0.2)',
        maxWidth:'280px',
        maxHeight:'160px',
        position:'relative',
        left:'60px',
        overflow:'hidden',
        objectFit: 'contain',
    },
    blackbox:
    { 
        backgroundColor:'black',
        zIndex:'1',
        borderRadius:'16px',
        minHeight:'158px',
        maxWidth:'280px',
        position:'relative',
        bottom:'160px',
        left:'60px',
        opacity:'0.5',
    },
    link1:
    {
        position:'relative',
        left:'85px',
        top:'120px'
    },
    btn1:
    {
        border:'1px solid white',
        color:'#001A41',
        borderRadius:'16px',
        boxShadow:'-1px 1px 3px 2px rgba(0, 0, 0, 0.2)',
        fontFamily:'arial',
        padding:'10px 20px',
        fontSize:'24px'
    },
    reviewbox:
    {
        margin:'30px 0px',
        border:'1px solid white',
        borderRadius:'16px',
        boxShadow:'-1px 1px 6px 4px rgba(0, 0, 0, 0.2)',
        backgroundImage: "url('/images/Bgdowncolor2.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    },
    leftbox:
    {
        margin:'30px 0px'
    },
    logoimg:
    {
        width:'200px',
        margin:'0px 40px'
    },
    
    rightbox:
    {
        margin:'30px 40px',
    },
    boxnum1:
    {
        backgroundColor:'#040f4f',
        color:'white',
        borderRadius:'24px',
        fontSize:'24px',
        padding:'8px 30px',
        fontWeight:'bolder',
        border:'1px solid white',
        boxShadow:'-1px 1px 2px 2px rgba(0, 0, 0, 0.5)',
        margin:'10px 30px 10px 40px',
    },
    imgs3:
    {
        position:'relative',
        top:'13px',
        paddingLeft:"20px"
    },
    hnum1:
    {
        color:'#040f4f',
        fontSize:'24px',
        fontWeight:'bold',
        margin:'30px 10px 0px 10px'
    },
    imgBox1:
    {
        padding:'0px 20px',
        maxWidth:'60%',
        maxHeight:'400px',
        margin:'auto'
    },
    img4:
    {
        width:'100%',
        height:'350px',
    },
    text2:
    {
        padding:'0px 40px 10px',
        color:'gray'
    },
    text3:
    {
        color:'gray',
        padding:'3px 40px',
    },
    imgs6:
    {
        maxWidth:'25px',
        maxHeight:'20px',
        position:'relative',
        top:'3px',
        left:'120px',
        padding:'0px 6px'
    },
    boxnum2:
    {
        border:'1px solid white',
        boxShadow:'-1px 1px 2px 3px rgba(0, 0, 0, 0.1)',
        borderRadius:'16px',
        margin:'10px 100px',
        paddind:'0px',
        '&:hover':
        {
            boxShadow:'-1px 1px 3px 4px rgba(0, 0, 0, 0.2)',
        }
    },
    numtext:
    {
        color:'red',
        fontSize:'64px',
        fontWeight:'bolder',
        padding:'0px 1px 15px 30px'
    }

});

function SmallCard(props){
const classes = useStyles();
    return(
        <>
            <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant='span' className={classes.title} color="textSecondary">
                            <img src='/images/person.png' className={classes.imgs1} />
                             Parth Daraak
                             <img alt='ShareIcon' src='/images/share.png' className={classes.imgs6}  />
                        </Typography>
                        <Typography>
                        <img alt='calendarIcon' className={classes.imgs1} src='/images/calendar.png' />
                        7 Apr, 20
                        </Typography>
                        <Typography  >
                        <img alt='TimeIcon' src='/images/clock.png' className={classes.imgs1}  />
                        4 min
                        </Typography>
                        <Typography  variant="h5">
                            What is a version <br />
                            control system? All<br />
                            about version control<br />
                            system.
                        </Typography>
                        <div style={{marginTop:'30px'}}>
                            
                            <Typography className={classes.Pview} variant="label">
                                <img alt='EyeIcon' src='/images/eye.png' className={classes.imgs1}  /> 505
                            </Typography>
                            
                            <Typography className={classes.Mbox} variant="label">
                                <img alt='MsgIcon' src='/images/comment.png' className={classes.imgs1}  />50
                            </Typography>
                            
                            <Typography  className={classes.likes} variant="label"> 
                                <img alt='LikeIcon' src='/images/heart.png' className={classes.imgs1}  />600
                            </Typography>
                        </div>
                    </CardContent>
                    <div className={classes.imgBox}>
                        <img alt="Version Control System" src={props.imgsrc}  />
                    </div>
                    <div className={classes.blackbox}>
                            <Typography color='white' className={classes.link1}> Click to view</Typography>
                    </div>
            </Card>
        </>
    );
};

function QuesAnswer(props){ 
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

  return(
      <>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.boxnum2}>
            <AccordionSummary                        >
                <Typography className={classes.text2} variant='h5' style={{color:'#040f4f'}} >
                    <img src='/images/question.png' alt='QuestionMark' className={classes.imgs1} />{props.Ques}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    <Typography className={classes.text2}>All project we take up carry the following guarantees:</Typography>
                    <Typography className={classes.text3}>
                        <img src='/images/radio.png' alt='QuestionMark' className={classes.imgs2} />
                        Confidentiality guarantee: All client details will be kept Confidential
                    </Typography>
                    <Typography className={classes.text3}>
                        <img src='/images/radio.png' alt='QuestionMark' className={classes.imgs2} />
                        Price guarantee: Minimum 50% cost-saving over on-site development 
                    </Typography>
                    <Typography className={classes.text3}>
                        <img src='/images/radio.png' alt='QuestionMark' className={classes.imgs2} />
                        Result guarantee: Progress-linked payments weighted toward the end.
                    </Typography>
                </div>
            </AccordionDetails>
        </Accordion>
    </>
    );
};

const BlogBox = () => {
const classes = useStyles();

return(
    <> 
        <React.Fragment>
            <Container maxWidth="lg">
                <Typography variant="h4" className={classes.text1} >Blog</Typography>
                <div className={classes.smline} ></div>
                <Grid container style={{marginTop:'40px'}}>
                    <Grid item xs={3} style={{margin:'0px 60px 0px 100px '}}>
                        <SmallCard imgsrc='/images/Capture.PNG' />
                    </Grid>
                    <Grid item xs={3} style={{marginRight:'60px'}}>
                        <SmallCard imgsrc='/images/Capture2.PNG' />
                    </Grid>
                    <Grid item xs={3}>
                        <SmallCard imgsrc='/images/Capture2.PNG' />
                    </Grid>
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={2} style={{marginTop:'100px'}}>
                        <Typography variant='button' className={classes.btn1} >View More</Typography>
                    </Grid>
                    <Grid item xs={5}>
                    </Grid>
                </Grid> 
                <div className={classes.reviewbox}>
                    <div style={{display:'flex'}}>
                        <div className={classes.leftbox}>
                        <img alt='codePlanet' src='/images/image_from_ios.png' className={classes.logoimg} />                            
                        </div>
                        <div className={classes.rightbox}>
                            <Typography variant='label' className={classes.boxnum1}>
                                Play Store <img alt='playStore' className={classes.imgs3} src='/images/playstore.jpg' />
                            </Typography>
                            <Typography variant='label' className={classes.boxnum1}>
                                App Store <img alt='AppStore' className={classes.imgs3} src='/images/apple1.jpg' />
                            </Typography>
                            <div style={{display:'flex'}}>
                                <div style={{margin:'0px 20px'}}>
                                <Typography variant='h6' className={classes.hnum1}>Rating</Typography>
                                <Typography variant='label' className={classes.numtext}>4.5</Typography> 
                                <span style={{position:'relative',bottom:'40px'}}>
                                    <img src='/images/star.png' className={classes.imgs1} />
                                    <img src='/images/star.png' className={classes.imgs1} />
                                    <img src='/images/star.png' className={classes.imgs1} />
                                    <img src='/images/star.png' className={classes.imgs1} />
                                </span>
                                </div>
                                <div style={{margin:'0px 30px'}}>
                                <Typography variant='h6' className={classes.hnum1}>Rating</Typography>
                                <Typography variant='label' className={classes.numtext}>4.5</Typography> 
                                <span style={{position:'relative',bottom:'40px'}}>
                                    <img src='/images/star.png' className={classes.imgs1} />
                                    <img src='/images/star.png' className={classes.imgs1} />
                                    <img src='/images/star.png' className={classes.imgs1} />
                                    <img src='/images/star.png' className={classes.imgs1} />
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Typography variant="h5" className={classes.text1} >frequently asked question</Typography>
                    <div className={classes.smline} style={{width:'200px'}} ></div>
                    <div className={classes.imgBox1}>
                        <img alt ='FAQ' src='/images/Asset7.png' className={classes.img4} />
                    </div>
                </div>
                <div>
                    <QuesAnswer Ques='What benefits can you guarantee?' />
                    <QuesAnswer Ques='How do you assure?' />
                    <QuesAnswer Ques='Can you guarantee time-bound results?' />
                </div>
            </Container>
    </React.Fragment>
    </>
    );
};

export default BlogBox;