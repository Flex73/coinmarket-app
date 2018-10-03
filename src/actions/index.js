export const REQUEST_FETCH_LISTINGS = 'REQUEST_FETCH_LISTINGS';
export const SET_LISTINGS = 'SET_LISTINGS';
export const REQUEST_FETCH_TICKERS = 'REQUEST_FETCH_TICKERS';
export const SET_TICKERS = 'SET_TICKERS';
export const REQUEST_FETCH_TICKER = 'REQUEST_FETCH_TICKER';
export const SET_TICKER = 'SET_TICKER';
export const REQUEST_FETCH_GLOBAL = 'REQUEST_FETCH_GLOBAL';
export const SET_GLOBAL = 'SET_GLOBAL';

export const requestFetchListingsAction = () => ({
    type: REQUEST_FETCH_LISTINGS
});

export const setListings = (payload) => ({
    type: SET_LISTINGS,
    payload
});

export const requestFetchTickersAction = () => ({
    type: REQUEST_FETCH_TICKERS
});

export const setTickers = (payload) => ({
    type: SET_TICKERS,
    payload
});

export const requestFetchTickerAction = (id) => ({
    type: REQUEST_FETCH_TICKER,
    payload: id
});

export const setTicker = (payload) => ({
    type: SET_TICKER,
    payload
});

export const requestFetchGlobalAction = () => ({
    type: REQUEST_FETCH_GLOBAL
});

export const setGlobal = (payload) => ({
    type: SET_GLOBAL,
    payload,
});
