import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, setUserData } from './authActions'; 
import { addUserData } from '../QuizQuest/quizActions'; 

const AuthPage = ({ onContinue }) => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const validateInputs = () => {
    if (username.length < 5) {
      alert('Упс! Схоже, Ваше ПІБ занадто коротке. Додайте трохи більше символів :)');
      return false;
    }

    if (isNaN(phone.replace('+', ''))) {
      alert('Номер телефону має складатися із цифр. Перевірте, чи не додалось щось зайве.');
      return false;
    }

    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    if (!validateInputs()) return;

    const userData = {
      name: username,
      phone,
    };

    dispatch(addUserData(username, phone))
    onContinue();
  };

  return (
<div className="auth-container container mt-5" style={{backgroundColor: 'none', maxHeight: '80%'}}>
        <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="card shadow-lg" style={{padding: '20px', backgroundColor: '#f6fbc0' }}>
            <div className="card-header text-center" style={{backgroundColor: '#9eebfc'}}>
              <p>👋 Щоб розпочати, давайте спершу познайомимось.</p>
              <p>🏆 Так я зможу зафіксувати Ваш результат гри:</p>
            </div>
            <div className="auth-form card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="username">Ім'я гравця:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    placeholder="ПІБ" 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                  />
                </div>
              
                <div className="form-group">
                  <label htmlFor="text">Номер телефону:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Ваш мобільний номер" 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                  />
                </div>
        
                <button type="submit" className="btn btn-primary btn-lg btn-block mt-3" style={{fontSize: '1em'}} onClick={handleLogin}>Увійти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default AuthPage;