import {combineReducers} from 'redux'
import {todos} from './todos'
import {count} from './count'


export default combineReducers({todos: todosReducer, count: countReducer})