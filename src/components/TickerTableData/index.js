import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Table, 
         TableBody,
         TableHead,
         TableRow,
         TableCell,
         TableFooter,
         TablePagination
    } from '@material-ui/core';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});


class TickerTableData extends Component {
    render() {
        const { id, name, marketCap, price, volumePerDay, circulatingSupply, changePerDay, classes } = this.props;
        const rows = [ id, name, marketCap, price, volumePerDay, circulatingSupply, changePerDay ];
        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell numeric>Name</TableCell>
                        <TableCell numeric>Market Cap</TableCell>
                        <TableCell numeric>Price</TableCell>
                        <TableCell numeric>Volume (24h)</TableCell>
                        <TableCell>Circulating Supply</TableCell>
                        <TableCell>Change (24h)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => {
                    return (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell>
                                {row.name}
                            </TableCell>
                            <TableCell>
                                {row.marketCap}
                            </TableCell>
                            <TableCell>
                                {row.price}
                            </TableCell>
                            <TableCell>
                                {row.volumePerDay}
                            </TableCell>
                            <TableCell>
                                {row.circulatingSupply}
                            </TableCell>
                            <TableCell>
                                {row.changePerDay}
                            </TableCell>
                        </TableRow>
                    );
                })}
                </TableBody>
                <TableFooter>
                    <TablePagination 
                        rowsPerPage={100}
                    />
                </TableFooter>
            </Table>
        )
    }
}

export default withStyles(styles)(TickerTableData);
