import React, { useState } from 'react'; // Імпортуємо useState
import { useDispatch, useSelector } from 'react-redux';
import { submitAnswer } from './quizActions';
import './quizQuestion.scss';

const QuizQuestion = () => {
  const question = useSelector(state => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const dispatch = useDispatch();
  
  const handleAnswerClick = (option, index) => {
    dispatch(submitAnswer(option, index));
  }

  return (
    <div className='question-container'>
    <h1 className='heading'>{question.text}</h1>
    {question.options.map((option, index) => (
      <button 
        className='button'
        key={index} 
        onClick={() => handleAnswerClick(option, index)}
      >
        {option}
      </button>
    ))}
  </div>
  );
};

export default QuizQuestion;