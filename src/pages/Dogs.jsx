import React from 'react'
import Card from 'react-bootstrap/Card';
import Dog1 from '../assets/image/dogs/1.png'
import Dog2 from '../assets/image/dogs/2.png'
import Dog3 from '../assets/image/dogs/3.png'
import Dog4 from '../assets/image/dogs/4.png'
import Dog5 from '../assets/image/dogs/5.png'

const Dogs = () => {
  return (
    <div className='container'>
      <div className='text-center m-5'>
        <h1>Perros</h1>
      </div>
      <div className='row'>
      <Card style={{ width: '18rem' }} className='m-3' >
        <Card.Img variant="top" src={Dog1} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>        
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='m-3' >
        <Card.Img variant="top" src={Dog2} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>        
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='m-3' >
        <Card.Img variant="top" src={Dog3} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>        
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='m-3' >
        <Card.Img variant="top" src={Dog4} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>        
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='m-3' >
        <Card.Img variant="top" src={Dog5} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>        
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default Dogs