import React from 'react';
import PropTypes from 'prop-types';

const IngredientsCard = ( { ingredients } ) => {
    return (
        <div className="col-md-6 mb-3">
            <p className="card-text mb-1" style={ { fontWeight: 'bold' } }>
                Ingredientes:
            </p>

            <ul className="card-text">
                {
                    ingredients.map( ( ingredient, ind ) => (
                        <li key={ ind }>{ ingredient }</li>
                    ) )
                }
            </ul>
        </div>
    );
};

IngredientsCard.propTypes = {
    ingredients: PropTypes.array.isRequired
};

export default IngredientsCard;
