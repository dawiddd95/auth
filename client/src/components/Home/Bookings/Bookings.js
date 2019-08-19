import React from 'react';
import {Link} from 'react-router-dom';

const Bookings = ({bookings}) => {
   const resetToken = () => {
      sessionStorage.removeItem('jwtToken');
   }

   return (  
      <div>
         {bookings.user.name} : {bookings.user.surname} : {bookings.user.email}
         {/* tutaj mialny juz swoje komponenty 
               Navigation z paskiem gornym       => {  Takie powtarzalne komponenty w kazdej podstronie dac luzem wHome jako foldery luzne
               sideMenu z paskiem lewym bocznym => {
               formularz dodawania BookingsAddForm
               lista istniejacych BookingsList
         */}
         <Link onClick={resetToken} to='/auth/login'>LOG OUT</Link>
      </div>
   );
}
 
export default Bookings;