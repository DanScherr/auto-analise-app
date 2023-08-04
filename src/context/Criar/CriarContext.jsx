import { createContext } from "react";

const CriarContext = createContext();

const propsProvider = {};

export const CriarProvider = ({children}) => {
    return <CriarContext.Provider
        value={propsProvider}
    >
        {children}
    </CriarContext.Provider>
};

export default CriarContext;