import { useState, useContext } from "react";

export const CurrentCategoryContext = createContext();

export const CurrentCategoryProvider = ( {children} ) => {
    const [category, setCategory] = useState("");

    return (
        <CurrentCategoryContext.Provider value={ currentUser }>
            {children}
        </CurrentCategoryContext.Provider>
    );
};

export default CurrentCategoryContext;