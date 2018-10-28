export const location = option => ({
  type: 'LOCATION',
  option
})

export const time = time => ({
  type: 'TIME',
  time
})

export const addToOrder = id => ({
  type: 'ADD_TO_ORDER',
  id
})

export const removeFromOrder = id => ({
  type: 'REMOVE_FROM_ORDER',
  id
})

  ​