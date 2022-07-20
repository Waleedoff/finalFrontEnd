import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function Home() {
  return (
    <div>
     
        <Container className="tagContainer">  
        
        <Row xs={2} md={2} className="g-4">
        <Col className="tagCol">
          <Card>
          <Button href="info">Python</Button>{' '}
            <Card.Body>
              <Card.Title>Python</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <Button href="/">JavaScript</Button>{' '}
            <Card.Body>
              <Card.Title>Javascript</Card.Title>
              <Card.Text>
              For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Note
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <Button href="/Question">React</Button>{' '}
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>
              React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <Button href="#">Django</Button>{' '}
            <Card.Body>
              <Card.Title>Django</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        
      
    </Row>
    </Container>

</div>
  )
}
