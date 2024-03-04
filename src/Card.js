import { Row, Card } from 'react-bootstrap';


function Cards() {
    return (
        <Row style={{justifyContent: 'center'}}>
        <Card bg="primary" text="white" style={{width: '20rem', margin: '1rem'}}>
            <Card.Header><h3>Card 1</h3></Card.Header>
            <Card.Body>
                <Card.Text>
                    Card 1
                </Card.Text>
            </Card.Body>
        </Card>

        <Card bg="danger" text="white" style={{width: '20rem', margin: '1rem'}}>
            <Card.Header><h3>Card 2</h3></Card.Header>
            <Card.Body>
                <Card.Text>
                    Card 2
                </Card.Text>
            </Card.Body>
        </Card>

        <Card bg="success" text="white" style={{width: '20rem', margin: '1rem'}}>
            <Card.Header><h3>Card 3</h3></Card.Header>
            <Card.Body>
                <Card.Text>
                    Card 3
                </Card.Text>
            </Card.Body>
        </Card>
      </Row>

    );
  }
  
  export default Cards;
  