import React from 'react'
import errorImg from "../images/error-page.jpg"
import { useNavigate, useRouteError } from 'react-router-dom'

const Errorpage = () => {

  const navigate = useNavigate()

  // this is to navigate to the Home website

  const handleHome = ()=> {
    navigate("/")
  }
  
  return (
    <div className='padding-block-700'>
        <div className='container flex '>
          <div className='image-fluid'>
          <img src={errorImg} alt="errror-img"/>
          </div>
        <p>Well, this is awkward, the page you are trying to view does not exist. </p>  
        
        <div className='padding-block-300'>
        <button  onClick={handleHome} className='secondary-button'>Go Home</button>
        </div>
        </div>

       
    </div>
  )
}

export default Errorpage