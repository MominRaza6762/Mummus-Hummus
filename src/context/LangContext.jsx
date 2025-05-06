import { createContext, useContext, useState } from "react";

// Create Context
const LangContext = createContext();

// Provider Component
export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); 

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "sv" : "en"));
  };

  return (
    <LangContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

// Custom Hook to use LangContext
export const useLang = () => useContext(LangContext);
