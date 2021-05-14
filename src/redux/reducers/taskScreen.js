const taskScreenReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPENTASKSCREEN':
      return true;
    case 'CLOSETASKSCREEN':
      return false;
    default:
      return state;
  }
};

export default taskScreenReducer;
