import API from 'goals-todos-api'
import { toast } from 'react-toastify';
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}

function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id
    }
}


export function handleAddGoal(name, cb){
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal));
                cb();
            })
            .catch(() => {
                toast.error('There was an error. Try again.');
            });            
    }
}

export function handleDeleteGoal(goal){
    return (dispatch) => {
        dispatch(removeGoal(goal.id));
        return API.deleteGoal(goal.id).catch(() => {
            dispatch(addGoal(goal));
            toast.error('An error ocurred. Try again.')
        })
    }
}