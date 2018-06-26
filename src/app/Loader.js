import React, { Component } from 'react';

export default class Loader extends Component {
    render() {
        const loaderStyles = {
            position: 'absolute',
            top: '42%',
            left: '50%',
        };

        return (
            <div style={loaderStyles}>
                <svg
                    width="52px"
                    height="52px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    className="lds-double-ring"
                    style={{
                        animationPlayState: 'running',
                        animationDelay: '0s',
                        background: 'none',
                    }}>
                    <circle
                        cx="50"
                        cy="50"
                        ng-attr-r="{{config.radius}}"
                        ng-attr-strokewidth="{{config.width}}"
                        ng-attr-stroke="{{config.c1}}"
                        ng-attr-stroke-dasharray="{{config.dasharray}}"
                        fill="none"
                        strokeLinecap="round"
                        r="40"
                        strokeWidth="10"
                        stroke="#215d38"
                        strokeDasharray="62.83185307179586 62.83185307179586"
                        transform="rotate(120 50 50)"
                        style={{
                            animationPlayState: 'running',
                            animationDelay: '0s',
                        }}>
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            calcMode="linear"
                            values="0 50 50;360 50 50"
                            keyTimes="0;1"
                            dur="1s"
                            begin="0s"
                            repeatCount="indefinite"
                            style={{
                                animationPlayState: 'running',
                                animationDelay: '0s',
                            }}
                        />
                    </circle>
                    <circle
                        cx="50"
                        cy="50"
                        ng-attr-r="{{config.radius2}}"
                        ng-attr-strokewidth="{{config.width}}"
                        ng-attr-stroke="{{config.c2}}"
                        ng-attr-stroke-dasharray="{{config.dasharray2}}"
                        ng-attr-stroke-dashoffset="{{config.dashoffset2}}"
                        fill="none"
                        strokeLinecap="round"
                        r="29"
                        strokeWidth="10"
                        stroke="#14a651"
                        strokeDasharray="45.553093477052 45.553093477052"
                        strokeDashoffset="45.553093477052"
                        transform="rotate(-120 50 50)"
                        style={{
                            animationPlayState: 'running',
                            animationDelay: '0s',
                        }}>
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            calcMode="linear"
                            values="0 50 50;-360 50 50"
                            keyTimes="0;1"
                            dur="1s"
                            begin="0s"
                            repeatCount="indefinite"
                            style={{
                                animationPlayState: 'running',
                                animationDelay: '0s',
                            }}
                        />
                    </circle>
                </svg>
            </div>
        );
    }
}
