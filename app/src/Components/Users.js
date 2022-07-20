import React from 'react'
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';

function Users() {
  return (
    <div>Users page
 
<Container>
    <CardGroup className='imgUsers'>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
        <Card.Body>
          <Card.Title>AKX</Card.Title>
          <Card.Text>
          CTO/co-founder at Valohai. Programmer generalist, occasional sysadmin/devops guy.
          Python / JavaScript / ES6 / TypeScript / C# / Linux / Docker / asdf everything :)
          If you need more in-depth consulting or mentoring, I'm found on Codementor.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
        <Card.Body>
          <Card.Title>VonC</Card.Title>
          <Card.Text>
          System Configuration Management Administrator (ClearCase, SVN, Git), defining various merge workflows between branches.
          Development Architect, which involves:
          tools support around java technologies, including eclipse.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/file-1656361016116-55e06cbfced9image" />
        <Card.Body>
          <Card.Title>Frank van Puffelen</Card.Title>
          <Card.Text>
          I am an engineer for Firebase at Google.
          I respond equally well to being called "Frank" or "puf".
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    </Container>



    </div>
  )
}

export default Users