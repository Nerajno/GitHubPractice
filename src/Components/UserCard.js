import React from 'react';
import { Card, Button } from 'react-bootstrap';

function UserCard(){
  const userInfoApi = "stuff"
  const [userInfo, setUserInfo] = useState([]);



  componentDidMount() { // need a full refactoring
    const apiUrl = props.url;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="secondary">Show Profile</Button>
      </Card.Body>
    </Card>
      );
  }
}
export default UserCard;