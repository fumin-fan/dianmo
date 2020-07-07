import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import App from './view/app';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";

 function Reducers(state={
   version:'chinese'
 }, action){
  switch(action.type){
    case 'english':
      return {version:'english'};
    case 'chinese':
      return {version:'chinese'};
    default:
      return state;
  }
} 
const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
