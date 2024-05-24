import ReactDOM from "react-dom"
import React from "react";


import Header from "./components/Header";
import Menu from "./components/Menu";

function App(){
    return( 
    <>
    <h1>Pizza</h1>
    <Header />
    <Menu />
    
    </>
)}




//React V18
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<App/>
</React.StrictMode>);