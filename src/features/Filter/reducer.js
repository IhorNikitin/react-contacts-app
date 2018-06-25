import * as types from './types';

const initialState = {
    searchStr: '',
    sortBySurname: false,
    sortByGroup: false,
};

export default function filterReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.SEARCH_BY_ANY_FIELD:
            return {
                ...state,
                searchStr: payload.trim().toLowerCase(),
                sortBySurname: false,
                sortByGroup: false,
            };

        case types.SORT_BY_SURNAME:
            return {
                ...state,
                sortBySurname: true,
                sortByGroup: false,
            };

        case types.SORT_BY_GROUP:
            return {
                ...state,
                sortBySurname: false,
                sortByGroup: true,
            };

        default:
            return state;
    }
}
