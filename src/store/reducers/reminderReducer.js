const initState = {}

const reminderReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_REMINDER_SUCCESS':
      console.log('create reminder success');
      return state;
    case 'CREATE_REMINDER_ERROR':
      console.log('create reminder error');
      return state;
    default:
      return state;
  }
};

export default reminderReducer;