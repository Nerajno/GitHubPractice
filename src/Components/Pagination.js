import React from 'react';

// import Pagination from 'react-bootstrap/Pagination';

//firstPage lastPage

const NavButtons = (props) => { 
let navList = [];
for( let i = 0; (i * props.usersPerPage) < props.totalUsersFound; i++){
    const page = i+1;
       navList.push(<li className="page-item"><button onClick={() => {props.updatePage(page)}}>{page}</button></li>);
      //  key=props.id to fix please
     }
return navList;
}

const Pagination = (props) => {
  return (
    <nav>
      <ul className='pagination' id='createdNavBtns'>
      <NavButtons {...props}/>
      </ul> 
   </nav>
  );

};

export default Pagination;