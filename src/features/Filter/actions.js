import * as types from './types';

export const searchByAnyField = (payload) => ({
  type: types.SEARCH_BY_ANY_FIELD,
  payload,
});

export const sortBySurname = () => ({
  type: types.SORT_BY_SURNAME,
});

export const sortByGroup = () => ({
  type: types.SORT_BY_GROUP,
});