import { id } from "prelude-ls";
import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../Actions/Action";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          {todo.message}
          <button onClick={() => props.dispatch(deleteTodo(todo.id))}
            style={{ margin: "25px" }} > DELETE </button>
        </li>
      ))}
    </ul>
  );
};
// let state;
const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(TodoList);
