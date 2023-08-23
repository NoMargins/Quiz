import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startQuiz as startQuizAction } from '../QuizQuest/quizActions';
import { useNavigate } from 'react-router-dom';
import CountDown from './CountDown'


import './quizDesc.scss';

const QuizDescription = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const startQuiz = () => {
    setShowCountdown(true);
  };

  const handleCountdownFinish = () => {
    dispatch(startQuizAction());
    navigate('/quiz/question');
  };

  const handleStartButtonClick = () => {
    setShowCountdown(true);
};


  return (
    <div className='container'>
      {showCountdown ? (
        <CountDown onFinish={handleCountdownFinish} />
      ) : (
        <div className="quiz-rules-container">
            <h2>Вітаємо у нашій захопливій вікторині!</h2>
            <p>Перш ніж ви розпочнете, ознайомтеся з декількома простими правилами:</p>
            <ul>
            <li>Попереду на вас чекає 10 цікавих питань про розвиток України - звісно, з точи зору історії фарми та медицини.</li>
                <li>Будьте уважні: Кожне питання має тільки одну правильну відповідь. Оберіть ту, яка, на вашу думку, найбільше підходить.</li>
                <li>Бережіть свої бали: За кожну правильну відповідь ви отримаєте 1 бал. Чим більше балів за меншу кількість часу – тим вище Ваше місце в рейтингу!</li>
                <li>Найважливіше – це отимати задоволення! Навчайтеся, розважайтеся і насолоджуйтеся кожним питанням.</li>
                <li>Коли ви дасте відповіді на всі запитання, то побачите свій результат. Поділіться ним із колегами і спробуйте знову, якщо хочете покращити свій рекорд!</li>
            </ul>
            <button className="start-quiz-btn" onClick={handleStartButtonClick}>Розпочати</button>
        </div>
      )}
    </div>
  );
};

export default QuizDescription;
