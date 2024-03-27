// import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
// import Header from './components/Header/Header';
// import CounterComponent from './components/UseState/CounterComponent';
import Effect from './components/useEffect/Effect';
import { useEffect,useState } from 'react';

function App() {

  const [isVisible , setVisible] = useState(true);
  return (
    <div className="App">
     
      {/* <Header />
      <CounterComponent /> */}
     {/* {isVisible ?<Effect/> : <></> }
     <button onClick={() => setVisible(!isVisible)}>Hello World </button> */}

     <Timer/>
     
    </div>
  );
}

export default App;
