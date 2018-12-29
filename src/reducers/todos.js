 import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO
} from '../actions/todos';

import {RECIEVE_DATA} from '../actions/shared';

 /**
 * App code que contém o código do reducer
 * Este é o código que o usuário deverá escrever para decidir como o estado muda com base na ação
 */
export default function todos(todos = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return todos.concat([action.todo]);
        case REMOVE_TODO:
            return todos.filter(todo => todo.id !== action.id);
        case TOGGLE_TODO:
            return todos.map(todo => todo.id !== action.id ? todo : Object.assign({}, todo, {
                complete: !todo.complete
            }));
        case RECIEVE_DATA:
            return action.todos;
        default:
            return todos;
    }
}