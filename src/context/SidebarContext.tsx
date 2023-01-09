import { ReactNode, createContext, useState } from "react";

export const SidebarContext = createContext<any>({});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isClose, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ isClose, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};
