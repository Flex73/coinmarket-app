import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestFetchListingsAction,
        requestFetchTickersAction,
        requestFetchTickerAction,
        requestFetchGlobalAction
    } from '../../actions';
import TickerTableData from '../../components/TickerTableData';

const mapStateToProps = state => ({
    state: state,
});

class TickerTable extends Component {

    componentDidMount() {
        const { requestFetchTickersAction } = this.props;
        requestFetchTickersAction();
    }
    
    render() {
        const { tickers } = this.props.state;
        const tickersTableDataValues = tickers.map((item, index) => ({
            id: item.id,
            name: item.name,
            marketCap: item.quotes.USD.market_cap,
            price: item.quotes.USD.price,
            volumePerDay: item.quotes.USD.volume_24h,
            circulatingSupply: item.circulating_supply,
            changePerDay: item.quotes.USD.percent_change_24h,
        }));
        return (
            <div>
                <TickerTableData
                    id={tickersTableDataValues.id}
                    name={tickersTableDataValues.name}
                    marketCap={tickersTableDataValues.marketCap}
                    price={tickersTableDataValues.price}
                    volumePerDay={tickersTableDataValues.volumePerDay}
                    circulatingSupply={tickersTableDataValues.circulatingSupply}
                    changePerDay={tickersTableDataValues.changePerDay}
                />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    {
        requestFetchListingsAction,
        requestFetchTickersAction,
        requestFetchTickerAction,
        requestFetchGlobalAction,
    }
)(TickerTable);
