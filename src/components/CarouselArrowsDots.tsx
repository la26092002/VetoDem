import React from 'react';

export const DotButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <button type="button" {...restProps}>
            {children}
        </button>
    );
};

export const PrevButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <button type="button" {...restProps}>
            {children}
            {/* You can add an arrow icon here */}
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
    );
};

export const NextButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <button type="button" {...restProps}>
            {children}
            {/* You can add an arrow icon here */}
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
    );
};