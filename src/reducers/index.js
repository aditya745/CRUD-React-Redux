import { combineReducers } from 'redux';
import reduxFormReducer from './reduxFormReducer';
import { reducer as reducerForm } from 'redux-form';
export default combineReducers({
    reducer : reduxFormReducer,
    form: reducerForm

})