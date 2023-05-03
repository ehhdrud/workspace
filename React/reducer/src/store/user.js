import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "changeJob":
      return { ...state, job: action.text };

    default:
      throw new Error();
  }
};
const initialUser = {
  name: "seodongkeyong",
  job: "FE-developer",
};

export default function UserStore(props) {
  const [user, dispatch] = useReducer(reducer, initialUser);
  console.log(user);

  return (
    <UserContext.Provider value={dispatch}>
      {props.children}
    </UserContext.Provider>
  );
}
