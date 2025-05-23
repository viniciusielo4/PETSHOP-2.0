import React from 'react'
import bannerDois from '../imagens/banner.jpg';

function Delivery() {
  return (
    <div>
      <section className='delivery'>
        <img src={bannerDois}/>
        <div className='txt'>
            <h1>Atendimento Delivery</h1>
            <h1>0800 555 3399</h1>
        </div>
      </section>
    </div>
  )
}

export default Delivery
