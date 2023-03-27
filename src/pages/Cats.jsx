import React from 'react'
import Card from 'react-bootstrap/Card';
import Cat1 from '../assets/image/cats/1.png'
import Cat2 from '../assets/image/cats/2.png'
import Cat3 from '../assets/image/cats/3.png'
import Cat4 from '../assets/image/cats/4.png'
import Cat5 from '../assets/image/cats/5.png'


const Cats = () => {
  return (
    <div className='container'>
      <div className='text-center m-5'>
        <h1>Gatos</h1>
      </div>
      <div className='row'>
      <Card style={{ width: '18rem' }} className='m-3' >
        <Card.Img variant="top" src={Cat1} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>        
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='m-3' >
        <Card.Img variant="top" src={Cat2} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>        
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='m-3' >
        <Card.Img variant="top" src={Cat3} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>        
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='m-3' >
        <Card.Img variant="top" src={Cat4} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>        
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='m-3' >
        <Card.Img variant="top" src={Cat5} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>        
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default Cats