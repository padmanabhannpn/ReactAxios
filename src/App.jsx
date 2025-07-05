import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import { callProduct, callSingleProduct } from './Service/allAPI'

function App() {
 


//   // Make a request for a user with a given ID
axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });


  axios.get('https://fakestoreapi.com/products/1')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


  


useEffect(() => {
  mGetProduct();
  mGetSingleProduct();
},[])


const mGetProduct = async() =>
{
  const response = await callProduct({})

  console.log(response)
}
 

const mGetSingleProduct = async() =>
{
  const response = await callSingleProduct({})

  console.log("SingleProduct : " , response)
}

  return (
    <>
      <div><p>Test</p></div>
    </>
  )
}

export default App
