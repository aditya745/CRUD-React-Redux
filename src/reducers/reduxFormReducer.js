import { GET_LIST, ADD_LIST, DELETE_USER, EDIT_USER, SAVE_USER } from '../actions/types';
const initialState = {
    users:[
        {
        firstName:"Aditya",
        lastName:"Rana",
        location:"Finland"
    },
    {
        firstName:"Saidur",
        lastName:"Rahman",
        location:"Finland"
    }
]
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_LIST:
        return {
            ...state
        };
        case ADD_LIST:
        return {
            ...state,
            users:[...state.users, action.payload]
        };
        case DELETE_USER:
        return {
            ...state,
            users: state.users.filter(user => user.firstName !== action.payload)
        };
        case EDIT_USER:
        return {
            ...state,
            users: state.users.map(user => user.firstName === action.payload ? {...user, isEditing: !user.isEditing }:user)
        };
        case SAVE_USER:
        return { 
            ...state,
            users: state.users.map(user => user.firstName===action.payload ? 
                {...user,
                    firstName:action.user.firstName,
                    lastName:action.user.lastName,
                    location:action.user.location,
                }
                :user)
        };
        default:
        return state
    }
}