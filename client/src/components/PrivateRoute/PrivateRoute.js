import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

// Za kazdym razem jak chce wejsc w chroniony komponent niech tutaj pobiera mi z bazy danych (pole isLogged ?? albo sesje z bazy danych) TO RACZEJ NIE POMOZE
// JWT => zeby bylo sprawdzane co kazde zadanie ale jak

// http://localhost:3000/user/5d5a7d85c706fc168494942f/bookings  => lcwir@gmail.com
// http://localhost:3000/user/5d5a9f936188d417d4eb8189/bookings => lross@gmail.com


// fetch('/user/data', {
//   method: 'GET',
//   headers: {
//     'Authorization': 'Bearer' + authToken
//   }
// })
// .then(res => res.json())
// .then(data => { console.log(data) })
// .catch(err => { console.log(err) })

const PrivateRoute = ({component: Component}) => {
   
   // React.useEffect(() => {
   //    axios.get('/api/token', {
   //       headers: {
   //          'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}` 
   //       }
   //    })
   //    .then(res => console.log(res.data))
   // })

   return <Route render={(props) => (
      true ? <Component {...props} /> : <Redirect to='/auth/login' />
   )} />
}

export default PrivateRoute;