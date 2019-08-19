import React from 'react';

import * as S from './StyledAuthSignup';
import SignupUserFormContainer from '../SignupUserFormContainer/SignupUserFormContainer';

const AuthSignup = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Company Managment App
            </S.Header>
            <SignupUserFormContainer />
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthSignup;