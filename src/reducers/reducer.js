import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const rootReducer = combineReducers({
    comments,
    users
})

export default rootReducer;