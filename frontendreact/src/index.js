import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import CalendarTable from './components/Calendar/Table'
import Sidebar from './components/Sidebar'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<CalendarTable />, document.getElementById('calendar')); //made single entry app

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

