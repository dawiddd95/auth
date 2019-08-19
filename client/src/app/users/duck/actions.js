// LEGENDA
// -------------------
// Z tymi mieszanymi importami ogarnąć
// dispatch(addLoggedUserAction(data)) => w Przypadku zamiany obiektu {} na 1 obiekt o innych danych 

import types from './types';

const addLoggedUserAction = (item) => ({
   type: types.FETCH_LOGGED_USER, item
})

export default {
   addLoggedUserAction,
}