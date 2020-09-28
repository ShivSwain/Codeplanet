import React from "react";
import Container from "@material-ui/core/container";
import { makeStyles, useTheme ,createMuiTheme ,ThemeProvider } from "@material-ui/core/styles";
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
    backgroundColor:'#040f4f'
  },
  imglogo:
  {
    height:'60px',
    width:'60px',
    opacity:'1',
    backgroundColor:'white',
    margin:'10px 5px'
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  menuOptions1: {
  },
  h_menuOpt:
  {
    margin:"0px",
    color:'white',
    varient:'label',
    padding:'0px'
  }
}));

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

  const themeColor = createMuiTheme({
    palette: {
      primary: {
        main: "#ffc107",
      },
      secondary: {
        main: '#f44336',
      },
    },
  });


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#040f4f'}}>
      <React.Fragment>
        <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src="/images/image_from_ios.png" className={classes.imglogo} />
          </Typography>
          <div>
            {matches ? (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
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
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </>
            ) : (
              <div className={classes.menuOptions1}>
                 <ThemeProvider theme={themeColor}>
                  <Tabs
                    value={value}
                    indicatorColor="Primary"
                    onChange={handleChangeTabC}
                    >
                    <Tab label="Home" className={classes.h_menuOpt} />
                    <Tab label="About" />
                    <Tab label="Training Course" />
                    <Tab label="Intership " />
                    <Tab label=" Our Service" />
                    <Tab label="Contact Us " />
                    <Tab label="Blog" />
                    <Button>Register</Button>
                  </Tabs> 
                </ThemeProvider>
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
