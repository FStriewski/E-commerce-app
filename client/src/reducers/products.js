let initialState = [
  {
    id: 1,
    name: 'Handbag',
    price: 1450
  },
  {
    id: 5,
    name: 'Heater',
    price: 550
  },
  {
    id: 7,
    name: 'T-shirt',
    price: 10
  }
]

// products.js
export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
