import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './task-list/task-list';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Main</Link>
            <Link to="/user">List</Link>
          </nav>
        </header>
        <div className="routees">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
