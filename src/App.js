import React, { useState } from "react";
import "./App.css";
import { useDebounce } from "use-debounce";
// import axios from 'axios';

import { Navbar, Nav, CardGroup } from 'react-bootstrap';
import Footer from "./Components/Footer";
// import UserCard from "./Components/UserCard";
import TestCard from "./Components/TestCard";
import Pagination from "./Components/Pagination";


function App(){
  const API = process.env.REACT_APP_SEARCH_API;
  const [users, setUsers] = useState([]);
  const [foundUsers, setFoundUsers] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(12);

  const getUsers = (input) => {
      fetch(input)
      .then(response => response.json())
      .then((data) => {
        console.log(data.total_count, data);
        setFoundUsers(data.total_count)
        setUsers(data.items)})
  }

  const handleOnSubmit = (e) => { // Need to implement debounce
    e.preventDefault();
    if (debouncedSearchTerm) {
      getUsers(API + debouncedSearchTerm+ "&per_page=800");
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value); 
  };

   // Get current posts
   const indexOfLastUser = currentPage * usersPerPage;
   const indexOfFirstUser = indexOfLastUser - usersPerPage;
   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
 
  let showFoundUsers  = foundUsers ;
    console.log()
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
      <div className="resultContainer container">
      <p>Current Users Found : { showFoundUsers }  users </p> 
      <Pagination props={users}/>
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
