import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userName, userScore } from './quiz.selectors';
import { setUserData } from '../Auth/authActions'; 
import { submitUserData } from '../UserInfo/api';
import './quizContainer.scss';

const QuizContainer = ({ onContinue }) => {
  const dispatch = useDispatch();
  const { name, phone } = useSelector(userName);
  const score = useSelector(userScore);
  const userData = { name, phone, score };

  const handleNext = async () => {
    try {
      await submitUserData(userData);
      dispatch(setUserData(userData));
      console.log('User data submitted:', userData);
      if (onContinue) {
        onContinue();
      }
    } catch (error) {
      console.error("Error submitting user data:", error);
    } 
  }

  useEffect(() => {
    if (!question && onContinue) {
      onContinue();
    }
  }, [question, onContinue]);

  return (
    <div className='quiz-container'>
      {question 
        ? (
          <>
            <QuizQuestion />
            <button className="skip-quest" onClick={handleNext}>Наступне питання</button>
          </>
        )
        : <div className='final-text'>Дякуємо за проходження вікторини!</div>
      }
    </div>
  );
}

export default QuizContainer;