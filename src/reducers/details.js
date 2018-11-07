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
    case 'ADD_ADDRESS':
      return  {
        ...state,
        address: action.address
      }
    default:
      return state;
  }
}

export default details;