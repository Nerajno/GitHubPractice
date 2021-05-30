import React from 'react';

const NavButtons = (props) => {
  console.log(JSON.stringify(props, null, 2));
  // {totalUsersFound: 16595, currentPage: 1, usersPerPage: 12, updatePage: ƒ}
  // {
  //   "props": {
  //     "totalUsersFound": 13336,
  //     "currentPage": 1,
  //     "usersPerPage": 12
  //   }
  // }
  // Pagination.js:6 nerando says undefined undefined
  // Pagination.js:13 []
  console.log("nerando says", props.totalUsersFound, props.usersPerPage )
let navList = [];
for( let i = 0; (i * props.usersPerPage) < props.totalUsersFound; i++){
  console.log(i);
  const page = i+1;
       navList.push(<li><button onClick={() => {props.updatePage(page)}}>Page {page}</button></li>);
     }
console.log(navList);
return navList;
}


const Pagination = (props) => {
  // console.log(props);
  // props = totalUserFound, current page, updatePage(fn), users per page
  // let props = props;
  // console.log(props);

  return (
    <nav>
       <ul className='pagination'>
      <NavButtons {...props}/>
      </ul> 
   </nav>
  );

};

export default Pagination;