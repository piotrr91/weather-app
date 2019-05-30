import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const Form = props =>{
    return(
        <form onSubmit = {props.submit} >
          
            <TextField

         id="standard-with-placeholder"
         placeholder="Wpisz miasto"
         margin="normal"
         value={props.value}
         onChange={props.change}  
            />
            
            <Button size="large" variant="contained" color="primary" onClick= {props.submit} >szukaj</Button>
        </form>
        
    )
}


export default Form
