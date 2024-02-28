import React from 'react';
import ReactDOM from 'react-dom';
import "../src/index.css"

function MyComponent(){
    const link = "https://instagram.com/itsmesuraj20";
    return <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a href= {link}>CheckOutMy Instagram</a></button>
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<MyComponent />);



//Start with Prop
