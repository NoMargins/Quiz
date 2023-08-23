import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './resultsPage.scss';

const ResultsPage = () => {
  const score = useSelector(state => state.quiz.score);
  const navigate = useNavigate();

  const handleLeaderboardClick = () => {
    navigate('/leaderboard'); // Замініть '/leaderboard' на потрібний вам маршрут до турнірної таблиці
  }

  return (
    <div className='results-container'>
      <h1 className='results-title'>Вітаємо! Ви набрали {score}/10 балів!</h1>
      <button className='retry-btn' onClick={handleLeaderboardClick}>Переглянути турнірну таблицю</button>
    </div>
  );
};

export default ResultsPage;