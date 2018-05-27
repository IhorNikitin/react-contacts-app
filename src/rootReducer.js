import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import users from './features/users/reducer';
import filter from './features/filter/reducer';

export default combineReducers({
    users,
    filter,
    form,
});