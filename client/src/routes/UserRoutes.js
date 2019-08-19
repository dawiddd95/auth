import React from 'react';
import {Switch, Route} from 'react-router-dom';

import UserBookingsRoutes from './UserBookingsRoutes';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const UserRoutes = () => {
   return (  
      <Switch>
         <Route path='/user/:id/bookings' component={UserBookingsRoutes} />    
         {/* <Route path='/user/:id/profile' component={Routy profilea} /> */}
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default UserRoutes;