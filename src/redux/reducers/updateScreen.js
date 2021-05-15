const updateScreenReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPENUPDATESCREEN':
      return true;
    case 'CLOSEUPDATESCREEN':
      return false;
    default:
      return state;
  }
};

export default updateScreenReducer;
