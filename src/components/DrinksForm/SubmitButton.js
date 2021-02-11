import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = React.memo( ( { disabled } ) => {
    return (
        <div className="col-md-10 offset-md-1 mt-2">
            <button
                type="submit"
                className="btn btn-block btn-primary"
                disabled={ disabled }
            >
                Buscar
            </button>
        </div>
    );
} );

SubmitButton.propTypes = {
    disabled: PropTypes.bool.isRequired
};

export default SubmitButton;
