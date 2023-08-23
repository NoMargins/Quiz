import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser, submitUserData } from './authActions'; 

const AuthPage = ({ onContinue }) => {  // передамо onContinue як проп
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const userData = {
      username,
      phone,
    };
    dispatch(loginUser(userData));
    dispatch(submitUserData(userData));

    onContinue();  // замість navigate використовуємо функцію onContinue для переходу до наступного етапу
  };

  return (
    <div className="auth-container container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="card shadow-lg">
            <div className="card-header text-center">
              <p>Вітаємо у світі вікторини "Мозаїка Незалежності: фарм-погляд"! </p>
              <p>Щоб розпочати, давайте спершу познайомимось.</p>
              <p>Так я зможу зафіксувати Ваш результат гри:</p>
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
        
                <button type="submit" className="btn btn-primary btn-lg btn-block mt-3" onClick={handleLogin}>Увійти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;