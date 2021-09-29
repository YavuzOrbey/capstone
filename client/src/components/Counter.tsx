import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' //EMPHASIS YOU CANNOT/SHOULD NOT import the reduce store into react components
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from '../redux/features/counter/counterSlice'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div >
        <button
       
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
         
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}