import React from 'react'
import { decrement, increment } from '../store/counterSlice'
import { useDispatch } from 'react-redux'

const Card = () => {
const dispatch =  useDispatch()


  return (
    <div className='card'>
        <div className="cardItem">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta maxime eum deleniti fuga unde odio. Necessitatibus reiciendis architecto aliquid officia blanditiis? Nostrum perferendis omnis commodi fuga corrupti amet sit?</p>
            <button onClick={()=>dispatch(increment())}>Add to Yr cart</button>
        </div>
    </div>
  )
}

export default Card
