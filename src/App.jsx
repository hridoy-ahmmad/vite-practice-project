
import axios from 'axios'
import './App.css'
import Nav from './Components/Header/Nav'
import Hero from './Components/Hero/Hero'
import Pricing from './Components/Pricing/Pricing'
import { Suspense, useState } from 'react'
import AddCart from './Components/AddCart/AddCart'


const dataPromise = axios.get('/pricng.json')


function App() {
  const [cart, setcart] = useState([])

  const handleAddCart = (data) => {
    const isExist = cart.find(item => item.id === data.id)
    if (!isExist) {
      setcart([...cart, data])
    } else {
      alert('already added')
    }
  }

  const removeHandle = (id) => {
    const filtered = cart.filter(item => item.id !== id)
    setcart(filtered)

  }
  console.log(cart);

  return (
    <div className='bg-black/5'>
      <Nav />
      <Hero></Hero>
      <div className='flex gap-5 mx-auto container my-15'>
        <div className='w-[70%]'>
          <Suspense>
            <Pricing dataPromise={dataPromise} handleAddCart={handleAddCart} ></Pricing>
          </Suspense>
        </div>
        <div className='w-[30%]'>
          <Suspense>

            <AddCart cart={cart} dataPromise={dataPromise} removeHandle={removeHandle}></AddCart>
          </Suspense>
        </div>
      </div>
    </div>

  )
}

export default App
