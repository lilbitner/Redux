import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {addTodo} from './Actions/todos'

function App() {
  const showTodos = props.todos.map(todo => <h2>{todo.title}</h2>)
  return (
    <div className="App">
      <h1>Redux Store</h1>
      {showTodos}
      <button onClick={() => props.addTodo({title: 'A Todo'})}>Create Todo</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos, //prop is key and value is state
    count: state.count //this determines if component has access to prop
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // addTodo: () => dispatch({type: "ADD_TODO", payload: todo}), 
    addTodo: (todo) => addTodo(todo, dispatch),
    increment: () => dispatch({type: "INCREMENT"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// function connect(function1, function2) {
//   return (component) => {}
// }

// connect(aFunctionThatReceivesStateAndCreatesPropsFromThatState, aFunctionThatReceivesDispatchAndCreatesPropsThatUseDispatch)
