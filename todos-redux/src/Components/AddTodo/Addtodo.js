import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../Actions/Action'
const Addtodo = (props) => {
    return (
       <form onSubmit={(event)=>{
           event.preventDefault()
           let input = event.target.UserInput.value;
           event.target.UserInput.value='';
        //    console.log(input);

        //for dispatch the action
        props.dispatch(addTodo(input));
       }}>
<input type='text' name="UserInput" />
<button>Submit</button>
       </form>
    )
}

export default connect() (Addtodo);
