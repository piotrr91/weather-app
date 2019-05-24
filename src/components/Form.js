import React from 'react';

const Form = props =>{
    return(
        <form>
            <input type="text"
            value = {props.value}
            onChange={props.change}
            placeholder="wpisz miasto" 
            />
            <button>szukaj</button>
        </form>
        
    )
}

export default Form