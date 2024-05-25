import React from 'react'

function UserDataComponent({ name, gender, age, emailId }){
    return (
      <div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{age}</p>
        <p>{emailId}</p>
      </div>
    );
  };
  

export default UserDataComponent