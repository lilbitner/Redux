import {ADD_TODO} from './types'


export function addTodo(todo, dispatch) { //create function and send it
    dispatch({type: ADD_TODO, payload: todo}) 
}