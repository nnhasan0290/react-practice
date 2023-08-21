import { createContext, useContext } from "react";

const SecondContext = createContext();


const SecondContextProvider = ({children}) => {
    return(
        <SecondContext.Provider value={{second: "This is the value of second context"}}>
            {
                children
            }
        </SecondContext.Provider>
    )
}


export default SecondContextProvider;

export const SecondContextCatch = () => useContext(SecondContext);