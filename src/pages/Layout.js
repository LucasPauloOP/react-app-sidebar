import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {CssBaseline} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import {NavLink} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ItensList from './Layout/list'
import Routes from '../components/routes';

const drawerWidth = 240;

//css
const useStyles = makeStyles(theme => ({
  
    root: {
      display: 'flex',
      
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    color:{
        backgroundColor:'#3f51b5'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1),

    },
    input: {
      display: 'none',
    },    
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

  const Button = styled.button`
                background: #FAFAFA;
                color: #db7093;
                margin-top:20%;
                margin-left:100%;
                font-size: 1em;
                margin: 1em;
                padding: 0.25em 1em;
                border: 2px solid #FAFAFA;
                border-radius: 3px;`





  //component

  function Layout(props) {

    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    return (
      <div className={classes.root}>
          
        <CssBaseline />
        <AppBar  position="fixed" className={classes.appBar}>
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              React Routes
            </Typography>
              <NavLink to={location => ({...location, pathname:"/login"})} >
                <Button  >
                  <span>Login</span>
                </Button>
              </NavLink>
          </Toolbar>
        </AppBar>
        
        <nav className={classes.drawer} aria-label="mailbox folders">

          <Hidden smUp implementation="css">
            
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <ItensList />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
            <ItensList />
            </Drawer>
          </Hidden>
        </nav>

        <Routes /> 
        
      </div>
    );
  }
  
  Layout.propTypes = {
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };
  
  export default Layout;