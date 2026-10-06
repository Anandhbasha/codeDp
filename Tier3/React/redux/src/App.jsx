import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment } from './Slice/Slice'

const App = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.counts.count)
  return (
    <div className='App'>
      <p>{cart}</p>
      <button onClick={()=>dispatch(Increment(1))}>Add</button>
    </div>
  )
}

export default App