import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddUserForm = props => {
    const { handleSubmit, pristine, submitting, reset } = props;
    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>First Name</label>    
                <div>
                  <Field
                  name="firstName"
                  component="input"
                  type="text"
                 />
                </div>
            </div>
            <div>
                <label>Last Name</label>    
                <div>
                  <Field
                  name="lastName"
                  component="input"
                  type="text"
                 />
                </div>
            </div>
            <div>
                <label>Location</label>    
                <div>
                  <Field
                  name="location"
                  component="input"
                  type="text"
                 />
                </div>
            </div>
            <div>
               <button type="submit" disabled={pristine || submitting}>
                Submit
               </button>
            </div>
            <div>
               <button type="button" disabled={pristine || submitting} onClick= {reset}>
                Clear Values
               </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form:'addForm',
    enableReinitialize: true,
    
})(AddUserForm)