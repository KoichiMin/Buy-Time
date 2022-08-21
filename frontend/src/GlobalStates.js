import { useReducer, createContext } from "react";

export const GlobalStates = createContext();

const initialState = {
    SearchBarInput:"",
    WatchDataGlobal: {
        watchDataHasLoaded:false,
        watchNamesHaveLoaded:false,
        watchIds:undefined,
        watchNames:undefined,
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'update-search-bar-input-value': {
            return {
                ...state,
                SearchBarInput:action.data,
            }
        }
        case 'update-watch-data-global-with-server': {
            return {
                ...state,
                WatchDataGlobal:action.data,
            }
        }
    }
}

export const GlobalStatesProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const updateSearchBarValue = (data) => {
        dispatch({
            type: 'update-search-bar-input-value',
            ...data,
        });
    }

    const updateWatchDataGlobal = (data) => {
        dispatch({
            type: 'update-watch-data-global-with-server',
            ...data,
        });
    }

    return(
        <GlobalStates.Provider
            value = {{
                state,
                dispatch,
                actions: {
                    updateSearchBarValue,
                    updateWatchDataGlobal,
                },
            }}
        >
            {children}
        </GlobalStates.Provider>
    )
    
}