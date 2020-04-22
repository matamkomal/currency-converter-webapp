import React, {Component} from 'react';
import PropTypes from 'prop-types';


class HistoricRates extends Component {
    propTypes1 = { from_date: PropTypes.string.isRequired, timeseries: PropTypes.number,base: PropTypes.string.isRequired, symbols: PropTypes.string.isRequired };

    render() {
        const green = Math.round((this.props.timeseries + 1) * 128);
        const red = 255 - green;
        const textColor = {
            backgroundColor: 'rgb(' + red + ',  0)',
            padding: '15px'
        };
        return <div style = {
            textColor
        } > 
        Relative exchange rate is {
            this.props.timeseries
        } </div>
    }
}

export default HistoricRates;