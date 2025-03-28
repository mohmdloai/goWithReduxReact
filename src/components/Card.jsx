import React from 'react'
import { useEffect } from 'react'
import { decrement, increment } from '../store/counterSlice'
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../store/postsSlice';
import { useSelector } from 'react-redux'
import Loader from './Loader'


const Card = () => {

const {data,error, isLoading}= useSelector(state=>state.posts)
const dispatch =  useDispatch();
useEffect(()=>{
    dispatch(getAllPosts());
},[])

if (isLoading) {
    return (<Loader/>)
}
  return (

    <div className='card'>
        {data?.map((data)=>(
                <div className="cardItem" key={data.id}>
            <p>{`${data.body.slice(0,70)}......`}</p>
            <button onClick={()=>dispatch(increment())}>Add to Yr cart</button>
        </div>
        ))}

    </div>
  )
}

export default Card
