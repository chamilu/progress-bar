import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import ProgressBar from './ProgressBar';

export default class ProgressBarList extends Component {
    static propTypes = {
        bars: PropTypes.arrayOf(PropTypes.number).isRequired,
        limit: PropTypes.number.isRequired,
    };

    generateBars = () => {
        const { bars, limit } = this.props;

        // This is used to generate keys for react map.
        const newBarList = bars.map(value => ({
            id: shortId.generate(),
            value,
        }));

        return newBarList.map(bar => (
            <ProgressBar key={bar.id} value={bar.value} limit={limit} />
        ));
    };

    render() {
        return this.generateBars();
    }
}
