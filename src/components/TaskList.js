import React, { Component } from 'react';

class TaskList extends Component {
    componentDidMount() {
        
    }

    render() {
        const list = this.props.todos.map((todos, i) => 
            <div key={i}>
                <h5>{todos.name}</h5>
                <p>{todos.content}</p>
            </div>
        );

        return (
            <div>{list}</div>
        )
    }
}

export default TaskList;