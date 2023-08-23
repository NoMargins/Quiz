import React, { useState } from 'react';
import AuthPage from './Front/Auth/AuthPage';
import QuizDescription from './Front/QuizDescription/QuizDescription';
import CountDown from './Front/QuizDescription/CountDown';
import QuizContainer from './Front/QuizQuest/QuizContainer';
import ResultsPage from './Front/LeadershipTable/ResultsPage';
import LeaderboardPage from './Front/LeadershipTable/LeaderboardPage';

const App = () => {
    const [stage, setStage] = useState('main');
    const [currentView, setCurrentView] = useState('CountDown');

  const handleCountDownFinish = () => {
    setCurrentView('QuizContainer');
  };

    const renderComponent = () => {
        switch (stage) {
        //   case 'main':
        //         return <MainImage onContinue={() => setStage('autorization')} />;
            case 'main':
                return <AuthPage onContinue={() => setStage('quizDescription')} />;
            case 'quizDescription':
                return <QuizDescription onContinue={() => setStage('countDown')} />;
                case 'countDown':
                return <CountDown onContinue={() => setStage('quizQuestion')} />;
            case 'quizQuestion':
                return <QuizContainer onContinue={() => setStage('results')} />;
            case 'results':
                return <ResultsPage onContinue={() => setStage('leaderboard')} />;
            case 'leaderboard':
                return <LeaderboardPage />;
            default:
                return <AuthPage />;
        }
    }

    return (
        <div>
            {renderComponent()}
        </div>
    );
}

export default App;