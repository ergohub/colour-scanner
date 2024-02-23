import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

const Imageholder = ({imageUrl, colours}) => {
    return(
        <Container className='mb-3'>
            {console.log(colours)}
            <Row>
                <Col className='text-center'>
                    <img src={imageUrl} width='640' alt='' />
                </Col>
            </Row>
            <Row>
                {colours.map((colour, id) => (
                    <Col key={id}>{colour}</Col>
                ))}
            </Row>
        </Container>
    )
}

export default Imageholder;