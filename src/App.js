import React, {  useState, Component } from "react";
import "./App.css";
// import { useDebounce } from "use-debounce";

import { Navbar, Nav, CardDeck } from 'react-bootstrap';
import Footer from "./Components/Footer";
import Card from "./Components/Card";


function App(){
  const API = process.env.REACT_APP_SEARCH_API;
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [debouncedSearchTerm] = useDebounce(searchTerm, 2000);

  const getUsers = (input) => {
      fetch(input)
      .then(response => response.json())
      .then((data) => {
        setUsers(data.items)})
        // console.log(users[0]);
  }

  const handleOnSubmit = (e) => { // Need to implement debounce
    e.preventDefault();
    if (searchTerm) {
      getUsers(API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    // console.log(e); 
    setSearchTerm(e.target.value);
  };

  console.log(users);

  return (
    <div className="App">
       <div className="main-container">
       <Navbar bg="light" expand="lg" className="fixed-top">
        <Navbar.Brand href="#home">Github Search</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Docs</Nav.Link>
          </Nav>
          <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            value={searchTerm}
            onChange={handleOnChange}
            placeholder="Search...."
          />
          </form>
        </Navbar.Collapse>
      </Navbar>
      <div className="resultContainer">
      <CardDeck>
       {users.length > 0 && 
          users.slice(0,100).map((user) => <Card key={user.id} {...user} />)}
      </CardDeck>
      </div>
      <Footer />
       </div>
    </div>
  );
}

export default App;
