import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {todoReducer} from './reducers/todoReduce'



export const store = createStore(todoReducer, composeWithDevTools())