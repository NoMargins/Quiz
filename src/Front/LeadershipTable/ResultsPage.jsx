import React from 'react';
import { useSelector } from 'react-redux';
import './resultsPage.scss';

const ResultsPage = () => {
  const score = useSelector(state => state.quiz.score);
 
  return (
    <div className='results-container'>
      <h1 className='results-title'><h2>Вітаємо!</h2><h3>Ви набрали {score}/10 балів!</h3></h1>
    </div>
  );
};

export default ResultsPage;