import { combineReducers } from 'redux';

const TotalDataList = (state = [], action) => {
  let newState = Object.assign([],state);
  switch (action.type) {
    case 'INIT_DATA_LIST':
      return action.data;
    default:
      return newState;
  }
};

export default combineReducers({
  TotalDataList,
  
});
