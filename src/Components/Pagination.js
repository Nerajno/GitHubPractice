import React from 'react';
// import Pagination from 'react-bootstrap/Pagination';

const NavButtons = (props) => {
let navList = [];
for( let i = 0; (i * props.usersPerPage) < props.totalUsersFound; i++){
  const page = i+1;
       navList.push(<li class="page-item"><button onClick={() => {props.updatePage(page)}}>{page}</button></li>);
     }
return navList;
}

const Pagination = (props) => {
  return (
    <nav>
       <ul className='pagination'>
      <NavButtons {...props}/>
      </ul> 
   </nav>
  );

};

export default Pagination;