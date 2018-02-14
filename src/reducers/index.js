export default function reducer(state = [], action) {
    switch (action.type) {
        case 'getList': 
            return action.todos;
        
        default: 
            return state;
    } 
}