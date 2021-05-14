import taskScreenReducer from './taskScreen';
import insertScreenReducer from './insertScreen';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  taskScreenReducer,
  insertScreenReducer,
});

export default allReducers;
