import React from 'react';

import * as S from './StyledSignupUserForm';

const SignupUserForm = ({err, handleOnInput}) => {
   return (  
      <S.Wrapper>
         <S.StyledForm>
            <S.FieldWrapper>
               <S.StyledField 
                  name='name' 
                  type='text' 
                  placeholder='Name' 
               />
               <S.StyledErrorMessage 
                  name='name' 
                  component='p' 
               />
            </S.FieldWrapper>
            <S.FieldWrapper>
               <S.StyledField 
                  name='surname' 
                  type='text' 
                  placeholder='Surname' 
               />
               <S.StyledErrorMessage 
                  name='surname' 
                  component='p' 
               />
            </S.FieldWrapper>
            <S.FieldWrapper>
               <S.StyledField 
                  onInput={handleOnInput}
                  name='email' 
                  type='text' 
                  placeholder='Email' 
               />
               <S.StyledErrorMessage  
                  name='email' 
                  component='p' 
               />
               <S.Error>
                  {err}
               </S.Error>
            </S.FieldWrapper>
            <S.FieldWrapper>
               <S.StyledField 
                  name='password' 
                  type='password' 
                  placeholder='Password' 
               />
               <S.StyledErrorMessage 
                  name='password' 
                  component='p' 
               />
            </S.FieldWrapper>
            <S.FieldWrapper>
               <S.StyledField 
                  name='confirmPassword' 
                  type='password' 
                  placeholder='Confirm password' 
               />
               <S.StyledErrorMessage 
                  name='confirmPassword' 
                  component='p' 
               />
            </S.FieldWrapper>        
            <S.Button type='submit'>Sign up</S.Button>
            <S.LinkWrapper>
               <S.StyledLink to='/auth/login'>
                  Already have an account? Log in.
               </S.StyledLink>
            </S.LinkWrapper>
         </S.StyledForm>
      </S.Wrapper>
   );
}
 
export default SignupUserForm;