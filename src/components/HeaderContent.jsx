import React from 'react'
import Content from './Content'

const HeaderContent = () => {
  return (
    <section className='padding-block-500'>
    <main className='container'>
      <div className='columns content flex'>
            <h2 className=''>Our number tell us more about us</h2>
       <Content number="6k+" content="Total branches opened last year"/>
       <Content number="15k+" content="New students in last 30 days"/>
       <Content number="1.5k" content="Comment made by our students"/>
       
       </div>
    </main>
    </section>
  )
}

export default HeaderContent