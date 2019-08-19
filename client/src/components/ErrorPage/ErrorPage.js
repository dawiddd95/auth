import React from 'react';
import * as S from './StyledErrorPage';
import {Link} from 'react-router-dom';

import errorImg from '../../assets/img/404.png'

const ErrorPage = () => {
   return (  
      <S.Wrapper>
         <S.Img src={errorImg} />
         <S.TextWrapper>
            <S.Header>
               404
            </S.Header>
            <S.Text>
               Sorry, the page you visited does not exist
            </S.Text>
            <Link to='/auth/login'>
               <S.Button>
                  Back to home
               </S.Button>
            </Link>
         </S.TextWrapper>
      </S.Wrapper>
   );
}
 
export default ErrorPage;