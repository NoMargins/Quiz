import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startQuiz } from '../QuizQuest/quizActions';  // Fixed import path
import './countDown.scss';

const CountDown = ({ onContinue }) => {
  const [count, setCount] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (count === 0) {
        dispatch(startQuiz());  // Dispatch action when count is 0
        const timer = setTimeout(onContinue, 1000);
        return () => clearTimeout(timer);
    }
  }, [count, onContinue, dispatch]);  // Added dispatch to dependency array for clarity

  return (
    <div className='countdown-container'>
      {count > 0 ? count : 'Поїхали!'}
    </div>
  );
};

export default CountDown;