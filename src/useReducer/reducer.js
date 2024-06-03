import users from "../data/users";

import { REMOVE_ITEM, RESET_LIST, CLEAR_LIST } from "../useReducer/actions";
const reducer = (currentState, action) => {
  if (action.type === REMOVE_ITEM) {
    const newUsers = currentState.users.filter(
      (user) => user.id !== action.payload.id
    );

    return { ...currentState, users: newUsers };
  }
  if (action.type === RESET_LIST) {
    return { ...currentState, users: users };
  }
  if (action.type === CLEAR_LIST) {
    return { ...currentState, users: [] };
  }
  throw new Error("Unknown action!");
  // console.log(action);
};
export default reducer;
