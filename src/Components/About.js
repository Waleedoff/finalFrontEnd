import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
function About() {
  return (
    <div>
<Container>
<Card className="text-center">
      <Card.Header>OverView</Card.Header>
      <Card.Body><h4>
        <Card.Title>Welcome to endTrouble website</Card.Title>
        </h4>
        <Card.Text>
          <h4>
        endTrouble website is a question and answer site for professional and enthusiast programmers. It's built and run by you as part of the Stack Exchange network of Q&A sites. With your help, we're working together to build a library of detailed, high-quality answers to every question about programming.
        </h4>
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
</Container>
    </div>
  )
}

export default About