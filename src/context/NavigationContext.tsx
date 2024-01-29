import { ReactNode, createContext, useContext } from "react";


interface navigationContextProps {
    navigation: any,
}

interface navigationContextProviderProps {
    children: ReactNode,
    navigation: any,
}

export const NavigationContext = createContext<navigationContextProps | undefined>(undefined);

export const useNavigationContext = () => {
    const context = useContext(NavigationContext);

    if (!context) {
      throw new Error('useNavigationContext debe utilizarse dentro de un proveedor NavigationContext');
    }
  
    return context;
};

const NavigationContextProvider: React.FC<navigationContextProviderProps> = ({ children, navigation }) => 
{ 
    const contextValue: navigationContextProps = {
      navigation: navigation,
    };
  
    return (
      <NavigationContext.Provider value={contextValue}>
        {children}
      </NavigationContext.Provider>
    );
};

export default NavigationContextProvider;