import React, { useEffect, useState } from "react";
import "./App.css";
import { useDebounce } from "use-debounce";

import { Navbar, Nav } from 'react-bootstrap';
import Footer from "./Components/Footer";
import Card from "./Components/Card";


function App(){
  const API = process.env.REACT_APP_SEARCH_API;
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 2000);

  const getUsers = (input) => {
      fetch(input)
      .then(response => response.json())
      .then((data) => {console.log(data.items[0].html_url)
        setUsers(data.items)})
  }

  const handleOnSubmit = (e) => { // Need to implement debounce
    e.preventDefault();
    if (debouncedSearchTerm) {
      getUsers(API + debouncedSearchTerm);
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
       {/* {users.length > 0 &&
          users.slice(0,1000).map((user) => <Card key={user.id} {...user} />)} */}
      </div>
      <Footer />
       </div>
    </div>
  );
}

export default App;
