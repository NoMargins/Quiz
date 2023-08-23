import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AuthPage from './Front/Auth/AuthPage';
import QuizDescription from './Front/QuizDescription/QuizDescription';
import QuizQuestion from './Front/QuizQuest/QuizQuestion';
import ResultsPage from './Front/LeadershipTable/ResultsPage';
import LeaderboardPage from './Front/LeadershipTable/LeaderboardPage';
import QuizContainer from './Front/QuizQuest/QuizContainer';


const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/quiz/description" element={<QuizDescription />} />
          <Route path="/quiz/question" element={<QuizContainer />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/" element={<AuthPage />} /> {/* Default route */}
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;