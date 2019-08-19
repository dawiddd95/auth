import styled from 'styled-components';
import {Link} from 'react-router-dom';
import background from '../../../assets/img/forgot.png';

import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   min-height: 100vh;
   height: 100%;
   background-image: url(${background});
   background-size: cover;
   background-position: center;

   display: flex;
   justify-content: flex-end;
`

export const Content = styled.div`
   width: 500px;
   min-height: 100vh;
   height: 100%;
   background-color: white;

   display: flex;
   flex-direction: column;
`

export const Header = styled.h1`
   margin-top: 60px;
   font-weight: 600;
   font-size: 24px;
   font-family: segoe;
   color: rgba(0,0,0,0.85);
   text-align: center;
`

export const StyledLink = styled(Link)`
   margin: 20px auto 0 auto;
   color: ${colors.redColor};
   text-align: center;
   font-size: 16px;
   font-family: segoe;
   text-decoration: none;
   transition: .3s;

   :hover {
      color: rgba(245,34,45,0.8);
      transition: .3s;
   }
`