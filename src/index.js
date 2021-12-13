import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux"; 
import allReducers from "./reducers"; 


export const store = createStore(allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Provider store={store}>
        <App />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



