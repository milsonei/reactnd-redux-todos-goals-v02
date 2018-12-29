import API from 'goals-todos-api'
import { toast } from 'react-toastify';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function handleDeleteTodo(todo){
    return (dispatch) => {
       dispatch(removeTodo(todo.id));
        return API.deleteTodo(todo.id).catch(() => {
            dispatch(addTodo(todo));
            toast.error('An error ocurred. Try again.')
        })
    }
}

export function handleToggleTodo(id){
    return (dispatch) => {
        dispatch(toggleTodo(id))
        return API.saveTodoToggle(id).catch(() => {
            dispatch(toggleTodo(id));
            toast.error('An error ocurred. Try again.')
        })
    }
}

export function handleAddTodo(name, cb){
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo));
                cb();
            })
            .catch(() => {
                toast.error('There was an error. Try again.');
            });            
    }
}