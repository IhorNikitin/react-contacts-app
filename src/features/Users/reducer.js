import * as types from './types';

export const initialState = {
    users: [],
    count: 0,
    currentPage: 1,
    isModal: false,
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
            return {
                ...state,
                users: state.users.concat(payload),
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
            let plusCount = state.count;
            return {
                ...state,
                count: ++plusCount,
            };

        case types.MINUS_COUNT:
            let minusCount = state.count;
            return {
                ...state,
                count: --minusCount,
            };

        case types.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload,
            };

        case types.IS_MODAL_SHOW:
            return {
                ...state,
                isModal: !state.isModal,
            };

        default:
            return state;
    }
}
