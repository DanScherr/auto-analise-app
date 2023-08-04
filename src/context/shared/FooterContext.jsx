import { createContext } from "react";

const FooterContext = createContext();

const propsProvider = {};

export const FooterProvider = ({children}) => {
    return <FooterContext.Provider
        value={propsProvider}
    >
        {children}
    </FooterContext.Provider>
};

export default FooterContext;