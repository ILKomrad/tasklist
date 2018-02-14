import axios from 'axios';

export function getTodos() {
    return axios.get('/getList')
        .then(res => res.data)
        .then(todos => {
            return {
                type: 'getList',
                todos: todos.todos
            }
        });
}