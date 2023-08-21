import { createContext, useContext, useReducer } from "react";

const SampleContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ONLY_FIRST":
      return { first: "nazmul" };
  }
};
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    first: "nazmul",
    last: "hasan",
  });
  return (
    <SampleContext.Provider value={{state, dispatch}}>{children}</SampleContext.Provider>
  );
};

export default ContextProvider;

export const CatchContext = () => useContext(SampleContext);
