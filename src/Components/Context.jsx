import React, { useContext, createContext } from "react";
const GlobalContext = createContext();
const Context = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <GlobalContext.Provider value={{ open, handleClose, handleOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useCont = () => useContext(GlobalContext);
export default Context;
