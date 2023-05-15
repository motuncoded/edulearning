import React from 'react'
import { useRouteError } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div className='padding-block-700'>
        <div className='container '>
        <h1>Oops</h1>
        <p>Sorry, an unexpected error occured. </p>  
        </div>
       
    </div>
  )
}

export default Errorpage