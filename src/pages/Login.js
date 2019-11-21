import React from 'react';
import TextInput from '../components/TextInput';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//css
const useStyles = makeStyles({
    card: {
      minWidth: 275,
      marginLeft:300
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    text:{
        marginLeft: 12
    },
    button:{
        marginLeft:80,
    }
  });


const Login = () =>{
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardContent>
            <Typography className={classes.text}>
               <h3>Faça seu login</h3> 
            </Typography>
                <TextInput type="text" variant="outlined" label="Usuário" id="userName" />
                <br />
                <TextInput type="password" variant="outlined" label="senha" id="userName" />
            </CardContent>
            <CardActions>
            <Button className={classes.button} variant="contained" color="primary" size="great">Login</Button>
            </CardActions>
    </Card>
     
    )
}

export default Login;