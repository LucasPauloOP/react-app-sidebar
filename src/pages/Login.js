import React from 'react';
import TextInput from '../components/TextInput';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
//css
const useStyles = makeStyles({
    card: {
      width: 500 ,
      marginLeft:390,
      marginTop:100
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
        justifyContent:"center",
        marginLeft:200
    },
    img:{
        marginTop:15,
        marginLeft:25
    }
  });


const Login = () =>{
    const classes = useStyles();
    return(
                 <Card className={classes.card}>
                        <img src={require("../assets/prominas.svg")} width={350} className={classes.img} />
                        <CardContent>
                        <Typography variant="h5" className={classes.text}>
                        Faça seu login 
                        </Typography>
                            <TextInput  type="text" variant="outlined" label="Usuário" id="userName" />
                            <br />
                            <TextInput type="password" variant="outlined" label="senha" id="password" />
                        </CardContent>
                        <CardActions>
                        <Button className={classes.button} variant="contained" color="primary">Login</Button>
                        </CardActions>
                </Card>
     
    )
}

export default Login;