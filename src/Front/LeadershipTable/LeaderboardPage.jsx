import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../UserInfo/api';
import './leadershipTable.scss';

const LeaderboardPage = () => {
  const leaderboard = useSelector(state => state.quiz.leaderboard);
  const userPosition = useSelector(state => state.quiz.userPosition);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  return (
    <div className='leaderboard-container'>
      <h1>Турнірна таблиця</h1>
      <table>
        <thead>
          <tr>
            <th>Позиція</th>
            <th>Ім'я</th>
            <th>Бали</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.score} points</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Твій рейтинг серед учасників: {userPosition}</h2>
    </div>
);
};

export default LeaderboardPage;