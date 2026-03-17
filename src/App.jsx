
import axios from 'axios'
import './App.css'
import Nav from './Components/Header/Nav'
import Hero from './Components/Hero/Hero'
import Pricing from './Components/Pricing/Pricing'
import { Suspense, useState } from 'react'
import AddCart from './Components/AddCart/AddCart'
import { toast, ToastContainer } from 'react-toastify'
import Loader from './Components/Loader'
import { CheckCheck } from 'lucide-react'
import Chart from './Components/Chart/Chart'



const dataPromise = axios.get('/pricng.json')


function App() {
  const [cart, setcart] = useState([])

  const handleAddCart = (data) => {
    const isExist = cart.find(item => item.id === data.id)
    if (!isExist) {
      setcart([...cart, data])
      toast.success(`"${data.plan_name}" plan Successfully added to the cart`, {
        autoClose: 1500,
        position: 'top-center',
        style: {
          height: '100px',
          width: '400px',
          fontSize: '22px',
          boxShadow: "2px 20px 200px 2px"
        },
        icon: <CheckCheck className=' text-green-600 h-10'></CheckCheck>
      },
      )
    } else {
      // alert('already added')
      toast.warning(`"${data.plan_name}" is Already added to the Cart`, {
        autoClose: 1500,
        position: 'top-center',
        style: {
          height: '100px',
          width: '350px',
          background: 'black',
          color: 'white',
          fontSize: '22px',
          boxShadow: "2px 20px 200px 2px"
        }

      })
    }
    return data
  }

  const removeHandle = (id) => {
    const filtered = cart.filter(item => item.id !== id)
    setcart(filtered)
    toast.success(`Remove from cart successfully`, {
      position: 'top-center',
      autoClose: 1500,
      style: {
        height: '100px',
        width: '400px',
        fontSize: '22px',
        boxShadow: "2px 20px 200px 2px"
      }
    })

  }
  console.log(cart);

  return (
    <div className='bg-black/5'>
      <Nav />
      <Hero></Hero>
      <div className='flex flex-col-reverse lg:flex-row gap-5 mx-auto container my-15 p-4'>
        <div className='lg:w-[70%]'>
          <Suspense fallback={<Loader></Loader>}>
            <Pricing dataPromise={dataPromise} handleAddCart={handleAddCart} ></Pricing>
          </Suspense>
        </div>

        <div className='lg:w-[30%]'>
          <Suspense>
            <AddCart cart={cart} dataPromise={dataPromise} removeHandle={removeHandle}></AddCart>
          </Suspense>
        </div>
      </div>
      <Chart></Chart>
      <ToastContainer></ToastContainer>
    </div>

  )
}

export default App
