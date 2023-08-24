import React from 'react';
import './main.scss';

const MainImage = ({ onContinue }) => {
  return (
    <div className="main-container">
      <div className="quiz-visual"></div>
      <h3 className="quiz-title">Вітаємо у світі вікторини</h3>
      <h1> Мозаїка Незалежності</h1>
      <h2>фарм-погляд</h2>
      <button className="start-button" onClick={onContinue}>
        Продовжити <span className="arrow">➜</span>
      </button>
    </div>
  );
}

export default MainImage;