import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import users from './features/Users/reducer';
import filter from './features/Filter/reducer';

export default combineReducers({
    users,
    filter,
    form,
});
