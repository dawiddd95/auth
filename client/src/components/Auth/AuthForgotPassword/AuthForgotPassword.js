import React from 'react';

import * as S from './StyledAuthForgotPassword';
import ForgotPasswordFormContainer from '../ForgotPasswordFormContainer/ForgotPasswordFormContainer';

const AuthForgotPassword = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Company Managment App
            </S.Header>
            <ForgotPasswordFormContainer />
            <S.StyledLink to='/auth/login'>
               Cancel
            </S.StyledLink>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthForgotPassword;