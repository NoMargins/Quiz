import React from 'react';
import { useSelector } from 'react-redux';
import './resultsPage.scss';

const ResultsPage = ({onContinue}) => {
  const score = useSelector(state => state.quiz.score);
 
  return (
    <div className='results-container'>
      <div className='results-title'>
        <h2>Вітаємо!🥳</h2>
        <h3>Ваш результат – {score}/10 балів!👏</h3>
        </div>
       <button className="retry-btn" onClick={onContinue}>Спробувати ще раз</button>
    </div>
  );
};

export default ResultsPage;