import React from 'react'
import Form from 'react-bootstrap/Form';

const Contacts = () => {
  return (
    <div className='container my-5'>
      <div className='mb-5 text-center'>
        <h1>Cuéntanos que mascota prefieres...</h1>
      </div>
      <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="pets@pets.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ingrese su comentario</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <button type="button" className="btn btn-secondary">Enviar</button>
        
      </Form>
    </div>
  )
}

export default Contacts