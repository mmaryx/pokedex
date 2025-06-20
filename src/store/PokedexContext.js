import { createContext } from "react";

export const PokedexContext = createContext({});

export function PokedexProvider({children}) {
    return (
        <PokedexContext.Provider value={{

        }}>
            {children}
        </PokedexContext.Provider>
    );
}