import React from 'react';
import PropTypes from 'prop-types';

const QuantitiesCard = ( { quantities } ) => {
    return (
        <div className="col-md-6 mb-3">
            <p className="card-text mb-1"  style={ { fontWeight: 'bold' } }>
                Cantidades:
            </p>

            <ul className="card-text">
                {
                    quantities.map( ( quantity, ind ) => (
                        <li key={ ind }>{ quantity }</li>
                    ) )
                }
            </ul>
        </div>
    );
};

QuantitiesCard.propTypes = {
    quantities: PropTypes.array.isRequired
};

export default QuantitiesCard;
