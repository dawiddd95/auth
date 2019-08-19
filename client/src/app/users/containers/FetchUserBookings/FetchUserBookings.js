// W JWT dac email bo wszystkie dzialania beda identyfikowane poprzez email lub wmongoSB zrobic referencje do usera, ważne też by byly dane o sesji w JWT, a do reduxa dac wszystkie dane dotyczace zalogowanego usera => name, surname, active
// FetchUserBookings bedzie pobierac tylko bookingi tego usera po id z adresu URL. Nie ma sensu pobierac tu jego dane, dane o zalogowanym uzytkowniku bedzie pobierac komponent FetchUserProfile
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import thunkActions from '../../duck/thunks';
import Bookings from '../../../../components/Home/Bookings/Bookings';

const FetchUserBookings = (props) => {
   const dispatch = useDispatch();
   // loggedUser w finalnej wersji byłoby userBookings
   const loggedUser = useSelector(state => state.fetchLoggedUser);

   useEffect(() => {
      dispatch(thunkActions.fetchLoggedUserAction(props.match.params.id))
   }, [])

   return (  
      <div>
         <Bookings 
            bookings={loggedUser}
         />
      </div>
   );
}
 
export default FetchUserBookings;