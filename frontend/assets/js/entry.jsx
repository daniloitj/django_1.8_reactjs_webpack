import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


//--------

// import ReactDOM from 'react-dom';
//
// var React = require('react')
// // var App = require('./app')
//
// // import React from 'react'
// import Fetch from 'react-fetch'
//
// export default class App extends React.Component{
//
//   render(){
//     return (
//       <Fetch url="http://www.omdbapi.com/?i=tt0944947&Season=1">
//         <TestComponent/>
//       </Fetch>
//     )
//   }
//
// }
//
// class TestComponent extends React.Component{
//   render(){
//     console.log(this.props)
//     return <div/>
//   }
// }
//
//
// ReactDOM.render(<App />, document.getElementById('react-app'))

///------------

// React.render(<App />, document.getElementById('app'));

// console.log('webpack está funcionando');
// import React from 'react';
// import Home from '../../public/components/Home';
//pq react.render n funciona ?
// React.render(<App/>, document.getElementById('app'))
// ReactDOM.render(<Home />, document.getElementById('app'));
