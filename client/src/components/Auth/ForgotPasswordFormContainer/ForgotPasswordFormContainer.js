import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm';

const ForgotPasswordFormContainer = () => {
   const [responseText, setResponseText] = React.useState('');
   const [success, setSuccess] = React.useState('');

   const handleOnSubmit = values => {
      axios.post('/api/auth/forgot-password', values)
      .then(res => {
         const {text, success} = res.data;
         setSuccess(success);
         setResponseText(text);
      })
   }

   const handleOnInput= () => {
      setResponseText('');
   }

   return (  
      <Formik
         render={props => <ForgotPasswordForm 
            {...props} 
            responseText={responseText}
            success={success}
            handleOnInput={handleOnInput} 
         />}
         initialValues={{
            email: '',
         }}
         validationSchema={Yup.object().shape({
            email: Yup
               .string()
               .email()
               .required('Email is required'),
         })}
         onSubmit={values => handleOnSubmit(values)}
      />
   );
}
 
export default ForgotPasswordFormContainer;