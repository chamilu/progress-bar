import React, { Component } from 'react';
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
        axios.get('http://pb-api.herokuapp.com/bars').then(
            response => {
                this.setState(prevState => ({
                    ...prevState,
                    barList: response.data.bars,
                    limit: response.data.limit,
                    data: response.data,
                }));
            },
            () => {
                // used alert for sake of simplicity.
                alert('Something went wrong. Please try again. !'); //eslint-disable-line
            },
        );
    }

    changeBarValue = (barId, changeValue) => {
        const { barList } = this.state;
        const newArray = _.clone(barList);
        const newValue = newArray[barId] + changeValue;

        newArray[barId] = newValue <= 0 ? 0 : newValue;

        this.setState({
            barList: newArray,
        });
    };

    render() {
        const { data, barList, limit } = this.state;

        return data ? (
            <div style={{ width: 400, margin: '0 auto', marginTop: 40 }}>
                <h1 className="title">Progress Bar</h1>

                <ProgressBarList bars={barList} limit={limit} />

                <div style={{ marginTop: 20 }}>
                    <ButtonList
                        data={data}
                        changeBarValue={this.changeBarValue}
                    />
                </div>
            </div>
        ) : (
            <Loader />
        );
    }
}
