import { combineReducers } from 'redux';
import authReducer from './features/auth/auth-reducer';
import navigationReducer from './features/navigation/navigation-reducer';
import portfolioReducer from './features/portfolio/portfolio-reducer';

const mainReducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
  portfolio: portfolioReducer,
});

export default mainReducer;
