import { GET_LIST, ADD_LIST, DELETE_USER, EDIT_USER, SAVE_USER } from './types';

export const getInfo = () => {
    return {
        type: GET_LIST,
    }
}
export const addInfo = (data) => {
    return {
        type:ADD_LIST,
        payload: data
    };
}
export const deleteUser = (firstName) => {
    return {
        type:DELETE_USER,
        payload: firstName
    }
}
export const editUser = (firstName) => {
    return {
        type:EDIT_USER,
        payload: firstName
    }
}
export const saveUser = (user) => {
    return {
        type:SAVE_USER,
        user:user,
        payload: user.firstName
    }
}
