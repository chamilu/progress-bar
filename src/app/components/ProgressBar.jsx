import React, { Component } from 'react';
import PropTypes from 'prop-types';

const barStyle = {
    width: '100%',
    height: 50,
    border: '2px solid #686f70',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 15,
    borderRadius: 5,
};

const labelStyle = {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    textAlign: 'center',
    paddingTop: 10,
    color: '#525252',
};

const innerBarStyle = {
    height: 46,
    WebkitTransition: 'width 0.3s',
    transition: 'width 0.3s',
};

export default class ProgressBar extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired,
    };

    render() {
        const { value, limit } = this.props;
        let barWidth = parseInt(100 * (value / limit), 10);
        barWidth = barWidth <= 0 ? 0 : barWidth;

        return (
            <div>
                <div style={barStyle}>
                    <div
                        style={{
                            ...innerBarStyle,
                            width: `${barWidth}%`,
                            backgroundColor:
                                barWidth <= 100 ? '#2ecc71' : '#e74c3c',
                        }}
                    />
                    <div style={labelStyle}>{barWidth}%</div>
                </div>
            </div>
        );
    }
}
