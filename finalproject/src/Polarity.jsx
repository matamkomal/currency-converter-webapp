import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Polarity extends Component {
    propTypes1 = { from: PropTypes.string.isRequired, polarity: PropTypes.number.isRequired,to: PropTypes.string.isRequired, amount: PropTypes.number.isRequired };

    render() {
        const green = Math.round((this.props.polarity + 1) * 128);
        const red = 255 - green;
        const textColor = {
            backgroundColor: 'rgb(' + red + ',  0)',
            padding: '15px'
        };
        return <div style = {
            textColor
        } > 
        Conversion Amount of {
            this.props.polarity
        } </div>
    }
}

export default Polarity;