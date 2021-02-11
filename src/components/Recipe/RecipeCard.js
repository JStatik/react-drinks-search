import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = React.memo( ( { name, image } ) => {
    return (
        <div className="card">
            <img src={ image } alt={ name } className="card-img-top"/>

            <div className="card-body p-1 text-center">
                <h5 className="card-title">{ name }</h5>
            </div>
        </div>
    );
} );

RecipeCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default RecipeCard;
