import { createContext, useReducer } from "react";

export const themeContext = createContext();

<<<<<<< HEAD
const initialState = { darkMode: true };
=======
const initialState = { darkMode: false };
>>>>>>> be1b7d450b53b811e95d1af37e540a31b0305f6d

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
<<<<<<< HEAD
  
};



=======
};

>>>>>>> be1b7d450b53b811e95d1af37e540a31b0305f6d
export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
