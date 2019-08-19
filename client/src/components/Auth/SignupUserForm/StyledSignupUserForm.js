import styled from 'styled-components';
import {Form, Field, ErrorMessage} from 'formik';
import {Link} from 'react-router-dom';

import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 85%;
   height: 100%;
   margin: 45px auto 20px auto;
`

export const StyledForm = styled(Form)`
   width: 100%;
`

export const FieldWrapper = styled.div`
   width: 100%;
   min-height: 60px;
   height: 100%;
   margin-bottom: 8px;
   color: rgba(0,0,0,0.65);

   display: flex;
   flex-direction: column;
`

export const StyledField = styled(Field)`
   height: 40px;
   padding: 0 15px;
   border: 0;
   outline: 0;
   border: 1px solid ${colors.silverColor};   
   border-radius: 5px;
   font-weight: 200;
   font-size: 16px;
   color: rgba(0,0,0,0.65);
   transition: 0.3s;

   &:hover {
      transition: 0.3s;
      border: 1px solid ${colors.redColor};
   }

   &:focus {
      border: 1px solid ${colors.redColor};
      box-shadow: 0 0 0 2px rgba(245,34,45,0.2);
   }
`

export const StyledErrorMessage = styled(ErrorMessage)`
   margin-right: auto;
   margin-left: 5px;
   font-family: 'segoe';
   font-size: 14px;
   color: ${colors.redColor};
`

export const Error = styled.p`
   margin-right: auto;
   margin-left: 5px;
   font-family: 'segoe';
   font-size: 14px;
   color: ${colors.redColor};
`

export const Button = styled.button`
   width: 100%;
   height: 40px;
   margin-top: 10px;
   padding: 0 15px;
   font-size: 16px;
   font-family: segoe;
   color: white;
   border: 0;
   border-color: ${colors.redColor};
   border-radius: 4px;
   background-color: ${colors.redColor};
   text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
   box-shadow: 0 2px 0 rgba(0,0,0,0.045);
   outline: 0;
   transition: .3s;
   cursor: pointer;

   &:hover {
      background-color: ${colors.hoverRedColor};
      border-color: ${colors.hoverRedColor};
      transition: .3s;
   }
`

export const LinkWrapper = styled.div`
   margin-top: 35px;
   
   display: flex;
   justify-content: center;
`

export const StyledLink = styled(Link)`
   color: #f5222d;
   font-size: 16px;
   font-family: segoe;
   text-decoration: none;
   transition: .3s;

   :hover {
      color: color: rgba(245,34,45,0.8);
      transition: .3s;
   }
`
