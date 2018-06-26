import React, { Component } from 'react';
import update from 'immutability-helper';
import _ from 'lodash';

import ProgressBarList from './ProgressBarList';
import ButtonList from './ButtonList';

const data = { buttons: [40, 8, -28, -30], bars: [70, 80, 86], limit: 110 };

export default class App extends Component {
    state = {
        barList: data.bars,
    };

    changeBarValue = (barId, changeValue) => {
        const newArray = _.clone(this.state.barList);
        const newValue = newArray[barId] + changeValue;
        newArray[barId] = newValue <= 0 ? 0 : newValue;
        this.setState({
            barList: newArray,
        });
    };

    render() {
        return (
            <div style={{ width: 400, margin: '0 auto', marginTop: 40 }}>
                <ProgressBarList bars={this.state.barList} limit={data.limit} />
                <div style={{ marginTop: 20 }}>
                    <ButtonList
                        data={data}
                        changeBarValue={this.changeBarValue}
                    />
                </div>
            </div>
        );
    }
}
