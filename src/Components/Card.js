import React from 'react';
import { Card } from 'react-bootstrap';

const UserCard = props => {
    console.log(props);
const {login, url} = props;
   
  return (
    <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="" /> */}
  <Card.Body>
    <Card.Title>{login}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
      <Card.Link href="#">{url}</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
  );
};


export default UserCard;