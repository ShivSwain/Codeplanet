import React from "react";
import Container from "@material-ui/core/container";
import { makeStyles, useTheme , withStyles , } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Header_imglogo:
  {
    height:'60px',
    width:'60px',
    opacity:'1',
    backgroundColor:'white',
    margin:'10px 5px'
  },
  Header_title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  Header_menuOptions1: {
    padding:'0px 0px !important',
    margin:'0px 0px'
  },
  Header_menuOpt: {
    padding:'0px!important',
    margin:'0px!important',
    width:'20px'
  },
}));

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 20,
      width: '100%',
      backgroundColor: '#f5a11d',
      padding:'0px'
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    width:'40px !important',
    padding:'0px',
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(0);

  const handleChangeTabC = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#040f4f'}}>
      <React.Fragment>
        <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" className={classes.Header_title}>
            <img src="/images/image_from_ios.png" className={classes.Header_imglogo} />
          </Typography>
          <div>
            {matches ? (
              <>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </>
            ) : (
              <div >
              <StyledTabs className={classes.Header_menuOptions1} value={value} onChange={handleChangeTabC} aria-label="styled tabs example">
                <StyledTab className={classes.Header_menuOpt} label="Home" />
                <StyledTab className={classes.Header_menuOpt} label="About" />
                <StyledTab className={classes.Header_menuOpt} label="Training Course" />
                <StyledTab className={classes.Header_menuOpt} label="Intership" />
                <StyledTab className={classes.Header_menuOpt} label="Our Service" />
                <StyledTab className={classes.Header_menuOpt} label="Contact Us" />
                <StyledTab className={classes.Header_menuOpt} label="Blog" />
              </StyledTabs>
              </div>
            )}
          </div>
          </Toolbar>
        </Container>
        </React.Fragment>
      </AppBar>
    </div>
  );
};

export default Header;
