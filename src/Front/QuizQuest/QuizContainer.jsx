import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuizQuestion from './QuizQuestion';
import { nextQuestion, setShowResults } from './quizActions';
import { useNavigate } from 'react-router-dom';
import './quizContainer.scss';

const QuizContainer = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.questions);
  const answers = useSelector(state => state.quiz.answers);
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const question = questions && questions.length > currentQuestionIndex ? questions[currentQuestionIndex] : null;
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      dispatch(nextQuestion());
    } else {
      console.log('Quiz completed! Answers: ', answers);
      dispatch(setShowResults(true));
      navigate('/results');
    }    
  }

  useEffect(() => {
    if (!question) {
      navigate('/results');
    }
  }, [question]);

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