import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './Recipe/RecipeCard';
import RecipeButton from './Recipe/RecipeButton';

const Recipe = React.memo( ( { recipe } ) => {
    const { idDrink, strDrink, strDrinkThumb } = recipe;
    
    return (
        <div className="col-sm-3 p-2">
            <div className="border border-danger">
                <RecipeCard
                    name={ strDrink }
                    image={ strDrinkThumb ? strDrinkThumb : '' }
                />

                <RecipeButton id={ idDrink } />
            </div>
        </div>
    );
} );

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default Recipe;
