import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // empty dependency array to run only once on component mount

  return (
    <div>
      <h1>StopWatch</h1>
      <p>Current Time is {timer}</p>
    </div>
  );
};

export default Timer;
