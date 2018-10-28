/*
let approximateState = {
  order: [],
  location: '',
  time: ''
}
*/

const order = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_ORDER':
      return {
        ...state,
        order: [
          ...state.order,
          action.item
        ]
      }
    case 'REMOVE_FROM_ORDER':
      return {
        ...state,
        order: 
          state.order.filter((el) => {
            return el.id !== action.item.id
          })
      }
    case 'DELETE_ORDER':
      return {
        ...state,
        order: []
      }
    default:
      return state;
  }
}
​
export default order;