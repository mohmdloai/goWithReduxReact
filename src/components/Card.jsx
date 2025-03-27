import React from 'react'
import { useEffect } from 'react'
import { decrement, increment } from '../store/counterSlice'
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../store/postsSlice';
import { useSelector } from 'react-redux'


const Card = () => {

const {data,error, isLoading}= useSelector(state=>state.posts)
const dispatch =  useDispatch();
useEffect(()=>{
    dispatch(getAllPosts());
},[])


  return (

    <div className='card'>
        {data?.map((data)=>(
                <div className="cardItem">
            <p>{data.body}</p>
            <button onClick={()=>dispatch(increment())}>Add to Yr cart</button>
        </div>
        ))}

    </div>
  )
}

export default Card
