import { SET_LISTINGS, SET_TICKERS, SET_TICKER, SET_GLOBAL } from '../actions';

const initialState = {
    listings: [],
    tickers: [],
    global: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LISTINGS:
            return {
                ...state,
                listings: action.payload,
            }
        case SET_TICKERS:
            return {
                ...state,
                tickers: action.payload.data,
            }
        case SET_TICKER:
            return {
                ...state,
                ticker: action.payload,
            }
        case SET_GLOBAL:
            return {
                ...state,
                gloabl: action.payload,
            }
        default:
            return state
    }
}
