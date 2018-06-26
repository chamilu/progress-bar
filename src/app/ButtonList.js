import React, { Component } from 'react';

export default class ButtonList extends Component {
    state = {
        selectedBarIndex: 0,
    };

    generateButtonList = () => {
        const { buttons } = this.props.data;

        return buttons.map(button => {
            return (
                <button
                    className="change-btn"
                    key={parseInt(button, 10)}
                    value={button}
                    onClick={this.handleValueChange}>
                    {button}
                </button>
            );
        });
    };

    generateDropdownItems = () => {
        const { bars } = this.props.data;

        return bars.map((bar, index) => {
            return (
                <option key={parseInt(bar, 10)} value={index}>
                    {`progress bar #${index + 1}`}
                </option>
            );
        });
    };

    handleBarChange = event => {
        const value = parseInt(event.target.value, 10);

        this.setState(prevState => ({
            selectedBarIndex: value,
        }));
    };

    handleValueChange = event => {
        this.props.changeBarValue(
            this.state.selectedBarIndex,
            parseInt(event.target.value, 10),
        );
    };

    render() {
        const { buttons, bars } = this.props.data;

        return (
            <div style={{ display: 'table', width: '100%' }}>
                <div style={{ display: 'table-cell' }}>
                    <select
                        onChange={this.handleBarChange}
                        value={this.state.selectedBarIndex}>
                        {this.generateDropdownItems()}
                    </select>
                </div>

                <div style={{ display: 'table-cell', textAlign: 'right' }}>
                    {this.generateButtonList()}
                </div>
            </div>
        );
    }
}
