import React, { useState } from "react";
import "./App.css";
import { useDebounce } from "use-debounce";
import axios from 'axios';

import { Navbar, Nav, CardGroup } from 'react-bootstrap';
import Footer from "./Components/Footer";
// import UserCard from "./Components/UserCard";
import TestCard from "./Components/TestCard";
import Pagination from "./Components/Pagination";


function App(){
  const API = process.env.REACT_APP_SEARCH_API;
  const [users, setUsers] = useState([]);
  const [foundUsers, setFoundUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 2000);

  const getUsers = (input) => {
      fetch(input)
      .then(response => response.json())
      .then((data) => {
        setFoundUsers(data.totalcount)
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

  console.log(users);
  // let showFoundUsers  = foundUsers ? foundUsers.length : "0";

  return (
    <div className="App">
       <div className="main-container">
       <Navbar bg="light" expand="lg" className="fixed-top">
        <Navbar.Brand href="#home">Github Search</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/Nerajno/GitHubPractice">Docs</Nav.Link>
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
      {/* Current Users Found : { showFoundUsers } */}
      < Pagination props={users}/>
      <CardGroup className="returnedCard">
       {users.length > 0 && 
          users.slice(0,100).map((user) => <TestCard key={user.id} {...user} />)}
      </CardGroup>
      </div>
      <Footer />
       </div>
    </div>
  );
}

export default App;
