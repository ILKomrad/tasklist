import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import TaskContainer from './containers/taskContainer';
import store from './store';
import { getTodos } from './actions';

store.dispatch(getTodos());
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/user" component={TaskContainer} />
            </Route>
        </Router>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
