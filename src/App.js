import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar, Nav, Button } from 'react-bootstrap';
import Footer from "./Components/Footer";

function App(){
  const API = process.env.REACT_APP_SEARCH_API
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = (input) => {
      fetch(input)
      .then(response => response.json())
      .then((data) => {console.log(data);
      setUsers(data.results)})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getUsers(process.env.REACT_APP_SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
       <div className="main-container">
       <Navbar bg="light" expand="lg">
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

      </div>
      <Footer />
       </div>
    </div>
  );
}

export default App;
