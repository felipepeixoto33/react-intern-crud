import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';

//Creates the store with our reducers.
const store = createStore( 
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//const dispatch = () => useDispatch(openTaskScreen);

//console.log(store.openTaskScreenReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
