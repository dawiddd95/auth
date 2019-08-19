// i tutaj np: '/user/:id/bookings/add' 

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import FetchUserBookings from '../app/users/containers/FetchUserBookings/FetchUserBookings';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const UserBookingsRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/user/:id/bookings' component={FetchUserBookings} />    
         {/* <Route path='/user/:id/profile' component={Routy profilea} /> */}
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserBookingsRoutes;