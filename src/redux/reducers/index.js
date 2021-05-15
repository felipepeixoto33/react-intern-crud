import taskScreenReducer from './taskScreen';
import insertScreenReducer from './insertScreen';
import updateScreenReducer from './updateScreen';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  taskScreenReducer,
  insertScreenReducer,
  updateScreenReducer,
});

export default allReducers;
