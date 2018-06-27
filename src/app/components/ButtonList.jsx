import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonList extends Component {
    static propTypes = {
        data: PropTypes.shape({}).isRequired,
        changeBarValue: PropTypes.func.isRequired,
    };

    state = {
        selectedBarIndex: 0,
    };

    generateButtonList = () => {
        const { data } = this.props;

        return data.buttons.map(button => (
            <button
                type="button"
                className="change-btn"
                key={parseInt(button, 10)}
                value={button}
                onClick={this.handleValueChange}>
                {button}
            </button>
        ));
    };

    generateDropdownItems = () => {
        const { data } = this.props;

        return data.bars.map((bar, index) => (
            <option key={parseInt(bar, 10)} value={index}>
                {`progress bar #${index + 1}`}
            </option>
        ));
    };

    handleBarChange = event => {
        const value = parseInt(event.target.value, 10);

        this.setState({
            selectedBarIndex: value,
        });
    };

    handleValueChange = event => {
        const { changeBarValue } = this.props;
        const { selectedBarIndex } = this.state;

        changeBarValue(selectedBarIndex, parseInt(event.target.value, 10));
    };

    render() {
        const { selectedBarIndex } = this.state;

        return (
            <div style={{ display: 'table', width: '100%' }}>
                <div style={{ display: 'table-cell' }}>
                    <select
                        onChange={this.handleBarChange}
                        value={selectedBarIndex}>
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
