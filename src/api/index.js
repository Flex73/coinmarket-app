import axios from 'axios';

export function getListings(params) {
    console.log(params);
    return axios.get(' https://api.coinmarketcap.com/v2/listings', { params })
    .then(res => res)
}

export function getTickers(params) {
    return axios.get(' https://api.coinmarketcap.com/v2/ticker', { params })
    .then(res => res)
}

export function getTicker(params, id) {
    return axios.get(` https://api.coinmarketcap.com/v2/ticker${id}`, { params })
    .then(res => res)
}

export function getGlobal(params) {
    return axios.get(' https://api.coinmarketcap.com/v2/global', { params })
    .then(res => res)
}
