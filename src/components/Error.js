import React from 'react';
import PropTypes from 'prop-types';

const Error = ( { height } ) => {
    return (
        <div className="container-error" style={ { height: height } }>
            <p className="error">
                No se obtuvieron resultados, intente nuevamente.
            </p>
        </div>
    );
};

Error.propTypes = {
    height: PropTypes.string.isRequired
};

export default Error;
