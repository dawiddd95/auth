import React from 'react';

import * as S from './StyledAuthEmailVerified';

const AuthEmailVerified = ({email}) => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Text>
               Please confirm your email at 
               <S.Span>
                  {email}
               </S.Span> 
               to confinue. If you don't see your message 
               <S.Span>
                  check your spam folder.
               </S.Span>
            </S.Text>
            <S.StyledLink to='/auth/login'>
               Back to login page
            </S.StyledLink>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthEmailVerified;