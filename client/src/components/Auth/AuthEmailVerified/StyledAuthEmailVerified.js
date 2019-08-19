import styled from 'styled-components';
import {Link} from 'react-router-dom';

import background from '../../../assets/img/emailunverified.jpg';
import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   background-image: url(${background});
   background-size: cover;
   background-position: center;
   display: flex;
   justify-content: flex-end;
`

export const Content = styled.div`
   width: 500px;
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

export const Text = styled.div`
   width: 90%;
   margin: 50px auto 30px auto;
   font-size: 16px;
   font-family: segoe;
   
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`

export const Span = styled.span`
   margin: 0 5px;
   font-family: segoeBold;
`

export const StyledLink = styled(Link)`
   width: 70%;
   margin: 10px auto 0 auto;
   padding: 10px;
   text-align: center;
   border: 1px solid red;
   border-radius: 4px;
   background-color: ${colors.redColor};
   color: white;
   font-size: 16px;
   font-family: segoe;
   text-decoration: none;
   transition: .3s;
   
   :hover {
      background-color: ${colors.hoverRedColor};
      border-color: ${colors.hoverRedColor};
      transition: .3s;
   }
`;