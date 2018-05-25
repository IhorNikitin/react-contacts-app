import * as types from './types';

export const initialState = {
  users: [],
  count: 0,
  currentPage: 1,
};

export default function usersReducer(state = initialState, action) {
	const { type, payload } = action;
    
	switch (type) {
    case types.FETCH_USERS:
        return {
            ...state,
            users: payload,
        };
	
	case types.DELETE_USER:
        return {
            ...state,
            users: state.users.filter(user => user.id !== payload),
        };
		
	case types.ADD_USER:
	    let newUsers = state.users;
        newUsers.push(payload);
        return {
            ...state,
            users: [...newUsers],
        };
		
	case types.EDIT_USER:
        return {
            ...state,
            users: state.users.map(user => user.id !== payload.id
			    ? {...user}
				: {...payload}
			),
        };
	
	case types.UPGRADE_COUNT:
        return {
            ...state,
            count: payload.count,
        };
		
	case types.PLUS_COUNT:
        return {
            ...state,
            count: ++state.count,
        };
	
	case types.MINUS_COUNT:
        return {
            ...state,
            count: --state.count,
        };
	
	case types.CHANGE_CURRENT_PAGE:
        return {
            ...state,
            currentPage: payload,
        };

    default:
        return state;
    }
}