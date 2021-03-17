import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    delayincrement(state){
    }
  }
})

export const { increment, decrement,delayincrement } = counterSlice.actions

export default counterSlice.reducer