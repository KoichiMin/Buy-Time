import { useReducer, createContext } from "react";

export const GlobalStates = createContext();

const initialState = {
    SearchBarInput:"",
    WatchDataGlobal: {
        watchDataHasLoaded:false,
        watchNamesHaveLoaded:false,
        watchIds:undefined,
        watchNames:undefined,
    },
    DisplayCheckoutModal:false,
    DisplaySuccessModal:false,
    DisplayErrorModal:false,
    ErrorModalData:null,
    grandTotal:0,
    SearchResults:"",
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
        case 'open-checkout-modal': {
            return {
                ...state,
                DisplayCheckoutModal:true
            }
        }
        case 'close-checkout-modal': {
            return {
                ...state,
                DisplayCheckoutModal:false
            }
        }
        case 'open-success-modal': {
            return {
                ...state,
                DisplaySuccessModal:true
            }
        }
        case 'close-success-modal': {
            return {
                ...state,
                DisplaySuccessModal:false
            }
        }
        case 'open-error-modal': {
            return {
                ...state,
                DisplayErrorModal:true,
                ErrorModalData:action.data,
            }
        }
        case 'close-error-modal': {
            return {
                ...state,
                DisplayErrorModal:false
            }
        }
        case 'update-grand-total': {
            return {
                ...state,
                grandTotal:action.data,
            }
        }
        case 'update-search-results': {
            return {
                ...state,
                SearchResults:action.data,
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

    const openCheckoutModal = () => {
        dispatch({
            type: 'open-checkout-modal',
        });
    }

    const closeCheckoutModal = () => {
        dispatch({
            type: 'close-checkout-modal',
        });
    }

    const openSuccessModal = () => {
        dispatch({
            type: 'open-success-modal',
        });
    }

    const closeSuccessModal = () => {
        dispatch({
            type: 'close-success-modal',
        });
    }

    const openErrorModal = (data) => {
        dispatch({
            type: 'open-error-modal',
            ...data,
        });
    }

    const closeErrorModal = () => {
        dispatch({
            type: 'close-error-modal',
        });
    }

    const updateGrandTotal = (data) => {
        dispatch({
            type: 'update-grand-total',
            ...data,
        });
    }

    const updateSearchResults = (data) => {
        dispatch({
            type: 'update-search-results',
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
                    openCheckoutModal,
                    closeCheckoutModal,
                    openSuccessModal,
                    closeSuccessModal,
                    openErrorModal,
                    closeErrorModal,
                    updateGrandTotal,
                    updateSearchResults
                },
            }}
        >
            {children}
        </GlobalStates.Provider>
    )
    
}