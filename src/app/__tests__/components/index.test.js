import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';

/* eslint no-undef:0 */
/* eslint react/jsx-filename-extension:0 */

describe('App Component', () => {
    it('renders correctly', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
});
