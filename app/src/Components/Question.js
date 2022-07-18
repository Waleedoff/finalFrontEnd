import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
export default function Question({props}) {
    let q = props.map((ele)=>(
        <>
        <Container className="cardContainer">
    <Card className='Card'>
       <Card.Body><h4>{ele.error }</h4></Card.Body>
       <Card.Body><h4>{ele.sol }</h4></Card.Body>
       {/* <Card.Img variant="top" src={ele.img} className='img'/> */}
       <Container>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ele.img} className='img' />
      </Card>
      </Container>
    </Card>
    </Container>
        </>
    ))
  return (
    <div>{q}</div>
  )
}
