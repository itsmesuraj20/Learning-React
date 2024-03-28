import { useState,useEffect } from 'react'
import './App.css';
import { getPosts, getRandomUser } from './api';
import UserCard from './Components/UserCard';
import PostCard from './Components/PostCard';

function App() {
  const [data,setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect (() =>  {
    getPosts().then((posts) =>setData(posts));
  },[]);

  useEffect (() => {
    getRandomUser().then((user) =>setUserData(user.results[0]));
  },[]);

  return (
    <div className="App">
    {userData && <UserCard data ={userData} />}
     {
      data ? data.map(e => <PostCard title = {e.title} body = {e.body}/>)
      : <p>No Data Received</p>
     }
    </div>
  );
};

export default App;
