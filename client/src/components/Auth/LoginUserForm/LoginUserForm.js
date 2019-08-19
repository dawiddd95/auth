import React from 'react';

import * as S from './StyledLoginUserForm';

const LoginUserForm = ({err, handleOnInput}) => {
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
                  component='p' 
               />
            </S.FieldWrapper>
            <S.FieldWrapper>
               <S.StyledField 
                  name='password' 
                  type='password' 
                  placeholder='Password' 
                  onInput={handleOnInput}
               />
               <S.StyledErrorMessage 
                  name='password' 
                  component='p' 
               />
               <S.Error>
                  {err}
               </S.Error>
            </S.FieldWrapper>
            <S.CheckboxWrapper>
               <S.StyledField 
                  checkboxstyle='true'
                  name='remember'
                  type='checkbox'
                  id='remember'
               />
               <S.Label htmlFor='remember'>
                  Remember me
               </S.Label>
               <S.StyledLink to='/auth/forgot-password'>
                  Forgot password
               </S.StyledLink>
            </S.CheckboxWrapper>
            <S.Button type='submit'>Log in</S.Button>
         </S.StyledForm>
      </S.Wrapper>
   );
}
 
export default LoginUserForm;