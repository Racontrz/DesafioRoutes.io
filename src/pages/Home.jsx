import React from 'react'
import cat from '../assets/image/cat.png'
import dog from '../assets/image/dog.png'


const Home = () => {
  return (
    <div className='container mainHome m-5'>
      <div>
        <h1>Bienvenido a Mundo Pets!</h1>
      </div>
      <div>
        <h3 className='mt-3'>Que prefieres...</h3>
      </div>
      <div className='petsHome m-5'>
        <div className='pets m-5 border border-dark rounded' >
          <img src={cat} alt="cat" />
        </div>
        <div className='pets m-5 border border-dark rounded'>
          <img src={dog} alt="dog" />
        </div>
      </div>
      
    </div>
  )
}

export default Home