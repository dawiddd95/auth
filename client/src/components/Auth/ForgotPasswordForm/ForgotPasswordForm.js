import React from 'react';

import * as S from './StyledForgotPasswordForm';

const ForgotPasswordForm = ({responseText, success, handleOnInput}) => {
   return (  
      <S.Wrapper>
         <S.StyledForm>
            <S.FieldWrapper>
               <S.StyledField 
                  name='email' 
                  type='text' 
                  placeholder='Email' 
                  onInput={handleOnInput}
               />
               <S.StyledErrorMessage 
                  name='email' 
                  component='div' 
               />
               <S.Response successfully={success}>
                  {responseText}
               </S.Response>
            </S.FieldWrapper>
            <S.Button type='submit'>Send password reset email</S.Button>
         </S.StyledForm>
      </S.Wrapper>
   );
}
 
export default ForgotPasswordForm;