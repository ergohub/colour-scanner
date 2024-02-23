import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';

const header = () => {
    return(
        <Container className='mt-5 p-4 text-center'>
            <Row>
                <Col>
                    <h1> {'Colour Scan'} </h1>
                </Col>
            </Row>
            <Row>
                <p>
                    {'Scan the Colours in your images.  Give it a go!!'}
                </p>
            </Row>
        </Container>
    )
}

export default header;