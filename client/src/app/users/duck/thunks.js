import actions from './actions';

const fetchLoggedUserAction = (id) => (dispatch) => {
   fetch(`/api/user/${id}/loggedUser`)
   .then(res => res.json())
   .then(res => dispatch(actions.addLoggedUserAction(res.loggedUser)))
}

// NORMALNIE TUTAJ BYLBY DO BOOKINGS =>  fetchUserBookingsAction
// DO DANYCH O ZALOGOWNYM UZYTKOWNIKU UZYLBYM => fetchUserDataAction

export default {
   fetchLoggedUserAction
}