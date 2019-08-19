import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const RootRoutes = () => {
   return (  
      <Router>
         <Switch>
            {/* path='/' tutaj warunek */}
            <Route exact path='/' render={() => <Redirect to='/auth/login' />} />
            <Route path='/auth' component={AuthRoutes} /> 
            <PrivateRoute path="/user" component={UserRoutes} />
            {/* <Route path='/user' component={UserRoutes} /> */}
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}
 
export default RootRoutes;