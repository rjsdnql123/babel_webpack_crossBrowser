import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement,delayincrement } from './counterSlice'

 function Counter() {
  const count = useSelector(state => state.counterSlice.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(delayincrement())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
export default Counter