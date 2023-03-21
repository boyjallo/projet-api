import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='main'>
      <h2 className='liste'>Liste d'utilisateurs</h2><hr></hr>
      <ul className='list'>
        {listOfUser.map(user => (
          <li className='list' key={user.id}>
            <div>
            <p className='numb'>{user.id}</p>
              <h3 className='name'>{user.name}</h3>
              <h3 className='name'>{user.username}</h3>
              <p>{user.email}</p>
              <p>{user.address .street}</p>
              <p>{user.address .suite}</p>
              <p>{user.address .city}</p>
              <p>{user.address .zipcode}</p>
              <h3>{user.geo }</h3>
              <p>{user.phone}</p>
              <p>{user.website}</p>
              <p>{user.company .name}</p>
              <p>{user.company .catchPhrase}</p>
              <p>{user.company .bs}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
