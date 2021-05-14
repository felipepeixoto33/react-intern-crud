const insertScreenReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPENINSERTSCREEN':
      return true;
    case 'CLOSEINSERTSCREEN':
      return false;
    default:
      return state;
  }
};

export default insertScreenReducer;
