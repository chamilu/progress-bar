import React, { Component } from 'react';

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
    WebkitTransition: `width 0.3s` /* Safari */,
    transition: 'width 0.3s',
};

export default class ProgressBar extends Component {
    render() {
        let barWidth = parseInt(
            100 * (this.props.value / this.props.limit),
            10,
        );
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
