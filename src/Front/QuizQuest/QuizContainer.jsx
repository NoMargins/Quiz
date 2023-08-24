import React, { useEffect, useCallback  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userName, userPhone, userScore } from './quiz.selectors';
import QuizQuestion from './QuizQuestion';
import { nextQuestion, setShowResults, addUserData } from './quizActions';
import './quizContainer.scss';
import { submitUserData } from '../UserInfo/api';

const QuizContainer = ({ onContinue }) => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.questions);
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const question = questions?.[currentQuestionIndex];
  const name = useSelector(userName);
  const phone = useSelector(userPhone);
  const score = useSelector(userScore);
  const userData = { name, phone, score };

  const handleCompletion = useCallback(async () => {
    if (currentQuestionIndex >= questions.length - 1) {
      dispatch(setShowResults(true));
      try {
        await submitUserData(userData);
        // dispatch(addUserData(userData));
      } catch (error) {
        console.error('Error submitting data:', error);
      }

      if (onContinue) {
        onContinue();
      }
    }
  }, [currentQuestionIndex, questions, userData, onContinue, dispatch]);

  

  useEffect(() => {
    if (!question) {
      handleCompletion(); // Викликаємо, коли вікторина завершена
    }
  }, [question, handleCompletion]);

  return (
    <div className='quiz-container'>
      {question 
        ? (
          <>
            <QuizQuestion />
          </>
        )
        : console.log('thank you!')
      }
    </div>
  );
}

export default QuizContainer;