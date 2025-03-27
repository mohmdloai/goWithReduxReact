import React from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {
 const {counter} =   useSelector(state=>state.key);
//  console.log(x);
  return (
    <nav>
        counter :{counter}
    </nav>
  )
}

export default Navbar
