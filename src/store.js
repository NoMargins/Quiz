import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Front/Auth/authReducer';
import quizReducer from './Front/QuizQuest/quizReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;