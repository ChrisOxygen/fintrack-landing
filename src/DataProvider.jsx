/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

import data from "../data.json";
const { menuTabs, socialProfLogos } = data;

const DataContext = createContext();

function DataProvider({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <DataContext.Provider
      value={{
        menuTabs,
        windowWidth,
        mobileMenuOpen,
        setMobileMenuOpen,
        socialProfLogos,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);

  if (context === undefined)
    throw new Error("DataContext was used outside the DataProvider");
  return context;
}

export { DataProvider, useData };
