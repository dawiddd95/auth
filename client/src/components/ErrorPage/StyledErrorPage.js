import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   min-height: 100vh;
   height: 100%;
   
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Img = styled.img`
   width: 478px;
   height: 406px;
`

export const TextWrapper = styled.div`
   height: 300px;
   margin-left: 60px;
   
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const Header = styled.h1`
   margin-bottom: 24px;
   font-weight: normal;
   font-size: 60px;
   font-family: nobel;
   color: #434E59;
`

export const Text = styled.p`
   margin-top: -10px;
   font-size: 20px;
   font-family: segoe;
   color: #595959;
`

export const Button = styled.button`
   margin-top: 20px;
   padding: 8px 15px;
   color: white;
   background-color: #f5222d;
   text-shadow: 0 -1px rgba(0,0,0,0.12);
   box-shadow: 0 2px 0 rgba(0,0,0, 0.045);
   outline: none;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: 0.3s;

   &:hover {
      transition: 0.3s;
      background-color: #ff6971;
   }
`