import { useReducer } from "react";
// import { useDataList } from "../hooks";

import users from '../data/users'
import reducer from "../useReducer/reducer";
const initialState = { users: users, isError: false, isLoading: false };



export const Users = () => {
  // const { isError, isLoading, dataList: users } = useDataList();

  const [currentState, dispatch] = useReducer(reducer, initialState);

  const { users, isError, isLoading } = currentState;
  if (isLoading) return <div>Loading.....</div>;
  if (isError) return <div>Something went wrong!</div>;
  return (
    <section className="user-section">
      {users.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            <h1>{user.firstName}</h1>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: { id: user.id } })
              }
            >
              remove
            </button>
          </div>
        ))}

      {users.length > 0 ? (
        <button
          className="btn"
          onClick={() => dispatch({ type: "CLEAR_LIST" })}
        >
          clear list
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => dispatch({ type: "RESET_LIST" })}
        >
          reset
        </button>
      )}
    </section>
  );
};
