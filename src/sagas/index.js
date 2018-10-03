import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getListings, getTickers, getTicker, getGlobal } from '../api';
import {
    REQUEST_FETCH_LISTINGS, setListings,
    REQUEST_FETCH_TICKERS, setTickers,
    REQUEST_FETCH_TICKER, setTicker,
    REQUEST_FETCH_GLOBAL, setGlobal,
} from '../actions';

function* readListingsSaga(action) {
    try {
        const listings = yield call(getListings, action.payload);
        yield put(setListings(listings));
    }
    catch(error) {
        yield put(console.log(error));
    }
}

function* readTickersSaga(action) {
    try {
        const tickers = yield call(getTickers, action.payload);
        yield put(setTickers(tickers));
    }
    catch(error) {
        yield put(console.log(error));
    }
}

function* readTickerSaga(action) {
    try {
        const ticker = yield call(getTicker, action.payload);
        yield put(setTicker(ticker));
    }
    catch(error) {
        yield put(console.log(error));
    }
}

function* readGlobalSaga(action) {
    try {
        const global = yield call(getGlobal, action.payload);
        yield put(setGlobal(global));
    }
    catch(error) {
        yield put(console.log(error));
    }
}

function* watchFetchRequestsSaga() {
    yield takeLatest([
        REQUEST_FETCH_LISTINGS, readListingsSaga,
        REQUEST_FETCH_TICKERS, readTickersSaga,
        REQUEST_FETCH_TICKER, readTickerSaga,
        REQUEST_FETCH_GLOBAL, readGlobalSaga,
    ]);
}

export default function* rootSaga() {
    yield all([
        watchFetchRequestsSaga()
    ]);
};
