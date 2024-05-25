import ReactDOM from "react-dom"
import React from "react";

// import {BrowserRouter ,Routes} from "react-router-dom"
// import App from "./App";
import Register from "./screens/Register";
import UserList from "./screens/UserData";


//React V18
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    {/* <Register /> */}
    {/* <App 
    name="Suraj Singh" 
    contactNumber={"9336933198"}
    gender={"male"}
    /> */}
    <UserList />

</React.StrictMode>);