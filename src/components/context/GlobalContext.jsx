import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext({})

export const GlobalProvider = ({children} ) => {
    const [sidbaropen, setSidbarOpen] = useState(false)

    
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(true);
  };

  const toggleLightMode = () => {
    setIsDarkMode(false);
  };


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return (
        <GlobalContext.Provider value={{
            sidbaropen, setSidbarOpen,
            windowWidth,
            isDarkMode, toggleDarkMode, toggleLightMode,
           
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext