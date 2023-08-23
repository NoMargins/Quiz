import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userName, userPhone, userScore } from './quiz.selectors';
import QuizQuestion from './QuizQuestion';
import { nextQuestion, setShowResults, ADD_USERDATA } from './quizActions'; // Додайте імпорт ADD_USERDATA
import './quizContainer.scss';
import {submitUserData} from '../UserInfo/api'

const QuizContainer = ({ onContinue }) => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.questions);
  const answers = useSelector(state => state.quiz.answers);
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const question = questions?.[currentQuestionIndex];
  const name = useSelector(userName);
  const phone = useSelector(userPhone);
  const score = useSelector(userScore);

  const handleNext = async () => { // Зробіть цю функцію асинхронною
    if (currentQuestionIndex < questions.length - 1) {
      dispatch(nextQuestion());
    } else {
      console.log('Quiz completed! Answers: ', answers);
      dispatch(setShowResults(true));
      try {
        await submitUserData({ name, phone, score });
        dispatch({
          type: ADD_USERDATA,
          payload: { name, phone, score }
        });
      } catch (error) {
        console.error("Error submitting user data:", error);
      }
      if (onContinue) {
        onContinue();
      }
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