import { createContext, useContext, useReducer } from "react";

const UseGlobal = createContext();
const initialState = {
  score: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, score: state.score + 2 };
    case "dec":
      return { ...state, score: state.score - 2 };
  }
}
function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { score } = state;

  return (
    <UseGlobal.Provider value={{ score, dispatch }}>
      {children}
    </UseGlobal.Provider>
  );
}
// function useValue() {
//   const data = useContext(UseGlobal);
//   return data;
// }
export { GlobalProvider, UseGlobal };
