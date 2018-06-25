import { toast } from 'react-toastify';
import * as types from './types';

import { ITEMS_PER_PAGE } from '../../constants';

export const getAllUsersCount = () => (
    (dispatch, _, api) => (
        api(`users/count`)
            .then((response) => {
                dispatch(upgradeCount(response.data));
            })
            .catch(err => toast.error(err.message, { autoClose: false }))
    )
);

export const fetchUsersThunk = (query='') => (
    (dispatch, _, api) => (
        api(`users${query}`)
            .then((response) => {
                dispatch(fetchUsers(response.data));
            })
            .catch(err => toast.error(err.message, { autoClose: false }))
    )
);

export const fetchOneUserThunk = (query='') => (
    (dispatch, _, api) => (
        api(`users${query}`)
            .then((response) => response.data)
            .catch(err => toast.error(err.message, { autoClose: false }))
    )
);

export const createUserThunk = (body) => (
    (dispatch, _, api) => (
        api(`users`, 'post', body)
            .then((response) => {
                dispatch(addUser(response.data));
                dispatch(plusCount());
                dispatch(changeCurrentPage(1));
                dispatch(fetchUsersThunk(`?_page=1&_limit=${ITEMS_PER_PAGE}`));
            })
            .then(() => toast.success('SAVE SUCCESS'))
            .catch(err => toast.error(err.message, { autoClose: false }))
    )
);

export const upgradeUserThunk = (body) => (
    (dispatch, _, api) => (
        api(`users/${body.id}`, 'put', body)
            .then((response) => {
                dispatch(editUser(response.data));
            })
            .then(() => toast.success('UPGRADE SUCCESS'))
            .catch(err => toast.error(err.message, { autoClose: false }))
    )
);

export const deleteUserThunk = (id) => (
    (dispatch, _, api) => (
        api(`users/${id}`, 'delete')
            .then((response) => {
                dispatch(deleteUser(id));
                dispatch(minusCount());
            })
            .then(() => toast.success('DELETE SUCCESS'))
            .catch(err => toast.error(err.message, { autoClose: false }))
    )
);

export const fetchUsers = payload => ({
    type: types.FETCH_USERS,
    payload,
});

export const addUser = payload => ({
    type: types.ADD_USER,
    payload,
});

export const editUser = payload => ({
    type: types.EDIT_USER,
    payload,
});

export const deleteUser = payload => ({
    type: types.DELETE_USER,
    payload,
});

export const upgradeCount = payload => ({
    type: types.UPGRADE_COUNT,
    payload,
});

export const plusCount = () => ({
    type: types.PLUS_COUNT,
});

export const minusCount = () => ({
    type: types.MINUS_COUNT,
});

export const changeCurrentPage = payload => ({
    type: types.CHANGE_CURRENT_PAGE,
    payload,
});

export const changeIsModal = () => ({
    type: types.IS_MODAL_SHOW,
});
