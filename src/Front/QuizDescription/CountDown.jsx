import React, { useState, useEffect } from 'react';
import './countDown.scss';

const CountDown = ({ onFinish }) => {
  const [count, setCount] = useState(3);
  
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (count === 0) {
      const timer = setTimeout(onFinish, 1000);
      return () => clearTimeout(timer);
    }
  }, [count, onFinish]);

  return (
    <div className='countdown-container'>
      {count > 0 ? count : 'Поїхали!'}
    </div>
  );
};

export default CountDown;