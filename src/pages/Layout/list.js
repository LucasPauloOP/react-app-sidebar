import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles} from '@material-ui/core/styles';
import {Link,withRouter,NavLink} from 'react-router-dom';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 240;

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
  }));


  const ItensList = () => { 

    const classes = useStyles();

      return (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <NavLink to="/porta1" activeClassName="selected">
                        <ListItem button key={'Porta1'}>

                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary={"Porta 1"} />          
                        </ListItem>
                    </NavLink>
                    <Link to="/porta2">
                        <ListItem button key={'Porta2'}>

                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={"Porta 2"} />          
                        </ListItem>
                    </Link>
                    <Link to="/porta3">
                        <ListItem button key={'Porta3'}>

                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary={"Porta 3"} />          
                        </ListItem>
                    </Link>
                </List>
            </div>
    );
  }

  export default withRouter(ItensList);