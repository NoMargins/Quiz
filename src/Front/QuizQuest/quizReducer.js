import {
    START_QUIZ,
    SUBMIT_ANSWER,
    FETCH_LEADERBOARD, 
    NEXT_QUESTION
  } from './quizActions';

  import questions from '../../questions.json';

  
  const initialState = {
    questions: questions,
    currentQuestionIndex: 0,
    score: 0,
    leaderboard: [],
    showingResults: false
  };
  
  const quizReducer = (state = initialState, action) => {
    switch (action.type) {
      case START_QUIZ:
        return { ...state, currentQuestionIndex: 0, score: 0 };
      case SUBMIT_ANSWER:
        // Logic for checking the answer and updating the score
        // For now, just move to the next question
        let newScore = state.score;
        const correctAnswerIndex = state.questions[state.currentQuestionIndex].correctAnswer;

        // If the submitted answer is correct
        if (action.payload.answerIndex === correctAnswerIndex) {
            newScore += 1;
        }
        return { ...state, score: newScore, currentQuestionIndex: state.currentQuestionIndex + 1 };
      case FETCH_LEADERBOARD:
        return { ...state, leaderboard: action.payload };

        case NEXT_QUESTION:
          return {
            ...state,
            currentQuestionIndex: state.currentQuestionIndex + 1
          };
        
          case 'SHOW_RESULTS':
    return {
        ...state,
        showingResults: action.payload,
    };

          default:
            return state;
    }
  };
  
  export default quizReducer;