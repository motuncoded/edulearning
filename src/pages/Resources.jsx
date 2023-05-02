import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Resources = () => {
  
  const tabs = [
    {
      "id": 1,
      "tabsTitle": "Books"
    },
    {
      "id": 2,
      "tabsTitle": "Website"
    }, {
      "id": 3,
      "tabsTitle": "Cheatsheets"
    }, {
      "id": 4,
      "tabsTitle": "Tools"
    }
  ]



  return (
    <div className='padding-block-700'>
      <div className="container">
        <div className="resources">
         {tabs.map((tab, index)=>(
                        <div className='tabs' key={index}>
                          <button>{tab.tabsTitle}</button>
                        </div>

         )
         )
      
         }
      </div>
</div>
    </div>
  )
}

export default Resources