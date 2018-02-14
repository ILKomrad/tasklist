import { connect } from 'react-redux';
import React from 'react';

import TaskList from '../components/TaskList';

function mapStateToProps(state) {
    return {
        todos: state
    }
}

const TaskContainer = connect(mapStateToProps)(TaskList);
export default TaskContainer;