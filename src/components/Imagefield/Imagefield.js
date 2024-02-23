import React from 'react';
import './Imagefield.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Imagefield = ({onInputChange, onButtonSubmit}) => {
    return(
        <Container className='text-center'>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Paste image URL here" onChange={onInputChange}/>
                            <Button className='mt-3' variant="secondary" onClick={onButtonSubmit} >Scan for Colour</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Imagefield;