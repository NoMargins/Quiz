import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuizQuestion from './QuizQuestion';
import { nextQuestion, setShowResults } from './quizActions';
import './quizContainer.scss';

const QuizContainer = ({ onContinue }) => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.questions);
  const answers = useSelector(state => state.quiz.answers);
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const question = questions?.[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      dispatch(nextQuestion());
    } else {
      console.log('Quiz completed! Answers: ', answers);
      dispatch(setShowResults(true));
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