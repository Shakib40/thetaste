import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: [],
    quantity: 0,
    sum: 0,
}

const counterSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // addOrder: (state, action) => {
    //     state.orders.push(action.payload);
    //     state.quantity = state.orders.length;
    //     state.total += action.payload.total;
    // },

    addOrder: (state, action) => {
      state.orders.push(action.payload);
      state.quantity += action.payload.quantity;
      state.sum += action.payload.sum;
    },

    // deleteOne: (state, action) => {
    //     const {id}  = action.payload;
    //     console.log('delete' , action.payload.id)
    //     state.orders = state.orders.filter(item => parseInt(item.id) != parseInt(id))
    //     state.quantity = state.orders.length;
    //     state.total -= action.payload.total;
    // },
    
    reset: (state) => {
        state.orders = [];
        state.quantity = 0;
        state.total = 0;
    },
  },
})

export const { addOrder, deleteOne, reset } = counterSlice.actions
export default counterSlice.reducer