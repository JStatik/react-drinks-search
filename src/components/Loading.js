import React from 'react';
import PropTypes from 'prop-types';

const Loading = ( { height } ) => {
    return (
        <div className="container-loading" style={ { height: height } }>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    );
};

Loading.propTypes = {
    height: PropTypes.string.isRequired
};

export default Loading;
