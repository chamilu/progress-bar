import React, { Component } from 'react';
import update from 'immutability-helper';
import _ from 'lodash';
import axios from 'axios';

import ProgressBarList from './ProgressBarList';
import ButtonList from './ButtonList';
import Loader from './Loader';

export default class App extends Component {
    state = {
        data: undefined,
        limit: undefined,
        barList: undefined,
    };

    componentDidMount() {
        // axios.get('http://pb-api.herokuapp.com/bars').then(
        axios.get('/api/bars').then(
            response => {
                this.setState(prevState => ({
                    ...prevState,
                    barList: response.data.bars,
                    limit: response.data.limit,
                    data: response.data,
                }));
            },
            error => {
                console.log('error', error);
            },
        );
    }

    changeBarValue = (barId, changeValue) => {
        const newArray = _.clone(this.state.barList);
        const newValue = newArray[barId] + changeValue;
        newArray[barId] = newValue <= 0 ? 0 : newValue;
        this.setState({
            barList: newArray,
        });
    };

    render() {
        return this.state.data ? (
            <div style={{ width: 400, margin: '0 auto', marginTop: 40 }}>
                <h1 className="title">Progress Bar</h1>
                <ProgressBarList
                    bars={this.state.barList}
                    limit={this.state.limit}
                />
                <div style={{ marginTop: 20 }}>
                    <ButtonList
                        data={this.state.data}
                        changeBarValue={this.changeBarValue}
                    />
                </div>
            </div>
        ) : (
            <Loader />
        );
    }
}
