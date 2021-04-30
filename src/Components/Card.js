import React from 'react';
import { Card } from 'react-bootstrap';

function UserCard(){




  componentDidMount() { // need a full refactoring
    const apiUrl = props.url;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
        <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="" /> */}
      <Card.Body>
        {/* <Card.Title>Name:{login}</Card.Title> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Card.Text>Followers{}</Card.Text>
        <Card.Text>Following{}</Card.Text>
          {/* <Card.Link href="#">{url.value}</Card.Link> */}
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      );
  }
}
export default UserCard;