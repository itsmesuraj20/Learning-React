import React from 'react'

function Register(){

function handleRegister(event){
    event.preventDefault();
    console.log("Submitted");
}

    let age = 18;
    let emailId ="surajsingh.sde@gmail.com"
  return (
    <div>
        <form>
        {age >= 18 && emailId === "surajsingh.sde@gmail.com"? (
            <div>
            <input type='text' placeholder="Enter the Email"/>
            <button onClick={
                handleRegister
            }>Submit</button>
            </div>
        ) : (
            <h1>Hurr</h1>
        )}
            
        </form>
        
    </div>
  )
}

export default Register