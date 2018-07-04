import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';

export default class ProgressBarList extends Component {
    /* eslint react/no-array-index-key:0 */
    static propTypes = {
        bars: PropTypes.arrayOf(PropTypes.number).isRequired,
        limit: PropTypes.number.isRequired,
    };

    generateBars = () => {
        const { bars, limit } = this.props;

        return bars.map((value, index) => (
            <ProgressBar key={index} value={value} limit={limit} />
        ));
    };

    render() {
        return this.generateBars();
    }
}
