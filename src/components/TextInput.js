import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const TextInput = ({id,label,variant,type}) =>{
    
    const classes = useStyles();
    
    return(

        <Fragment>
            <TextField type={type} variant={variant} fullWidth id={id} label={label} className={classes.textField} margin="normal"  />
        </Fragment>
    )
}

export default TextInput;