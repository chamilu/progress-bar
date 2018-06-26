import React, { Component } from 'react';

import ProgressBar from './ProgressBar';

export default class ProgressBarList extends Component {
    generateBars = () => {
        return this.props.bars.map((value, index) => {
            return (
                <ProgressBar
                    key={index}
                    value={value}
                    limit={this.props.limit}
                />
            );
        });
    };

    render() {
        return this.generateBars();
    }
}
