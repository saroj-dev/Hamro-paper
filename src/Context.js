import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [hover, setHover] = useState();
  const [semester, setSemester] = useState(null);

  return (
    <Context.Provider
      value={{ click: [hover, setHover], semdata: [semester, setSemester] }}
    >
      {children}
    </Context.Provider>
  );
};
