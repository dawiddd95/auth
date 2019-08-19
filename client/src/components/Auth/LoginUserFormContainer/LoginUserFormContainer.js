import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import LoginUserForm from '../LoginUserForm/LoginUserForm';

const LoginUserFormContainer = () => {   
   const [success, setSuccess] = React.useState(false);
   const [err, setErr] = React.useState('');
   const [id, setID] = React.useState('');


   const handleOnSubmit = values => {
      axios.post('/api/auth/login', values)
      .then(res => {
         const {err, success, id, token} = res.data;
         setID(id);
         setErr(err);
         setSuccess(success);
         sessionStorage.setItem('jwtToken', token);
      })
   }

   const handleOnInput= () => {
      setErr('');
   }

   return (  
      <div>
         {success ? (
               <Redirect to={`/user/${id}/bookings`} />
            ) : ( 
               <Formik
                  component={props => <LoginUserForm {...props} err={err} handleOnInput={handleOnInput} />}
                  initialValues={{
                     email: '',
                     password: ''
                  }}
                  validationSchema={Yup.object().shape({
                     email: Yup
                        .string()
                        .email()
                        .required('Email is required'),
                     password: Yup
                        .string()
                        .required('Password is required'),
                  })}
                  onSubmit={values => handleOnSubmit(values)}      
               />
            )
         }
      </div>
   );
}
 
export default LoginUserFormContainer;