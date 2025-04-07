import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './styles/coustom.scss';  // SCSS 파일을 import
import PaginationExample from './PaginationExample';




const test = () => {
  return (
    <Container className='grid-container'>
      <Row>
        <Col>
          그래프
        </Col>
        <Col>
          그래프
        </Col>
        <Col >
        <PaginationExample/>
        </Col>
      </Row>
    </Container>
  )
}

export default test