import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 85%;
   height: 100%;
   margin: 15px auto 20px auto;
`

export const Divider = styled.div`
   width: 100%;
   height: 1px;
   background: transparent;
   text-align: center;
   font-weight: 500;
   font-size: 16px;
   color: rgba(0,0,0,0.85);
   vertical-align: middle;
   position: relative;
   white-space: nowrap;
   display: table;


   &:before, &:after {
      content: '';
      width: 50%;
      top: 50%;
      border-top: 1px solid #e8e8e8;
      transform: translateY(50%);
      position: relative;
      display: table-cell;
   }
`

export const Span = styled.span`
   padding: 0 24px;
   line-height: 24px;
   font-weight: 600;
   font-family: segoe;
   font-size: 16px;
   color: rgba(0,0,0,0.65);
`

export const SocialIconsWrapper = styled.div`
   width: 100%;
   margin-top: 35px;

   display: flex;
   justify-content: center;
`

export const SocialIcon = styled.img`
   width: 35px;
   height: 35px;
   margin: 0 20px;
   cursor: pointer;
`

