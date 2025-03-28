
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import './index.css'

const App = () => {
  return (
<Provider store = {store}>
  <Navbar />
  <Card/>
  <Footer/>

</Provider>
  )
}

export default App
