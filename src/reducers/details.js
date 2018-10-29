const details = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {
        ...state,
        location: action.option
      }
    case 'ADD_TIME':
      return  {
        ...state,
        time: action.time
      }
    default:
      return state;
  }
}

export default details;