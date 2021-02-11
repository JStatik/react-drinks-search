import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImageCard from './DetailsRecipeCard/ImageCard';
import IngredientsCard from './DetailsRecipeCard/IngredientsCard';
import QuantitiesCard from './DetailsRecipeCard/QuantitiesCard';

const DetailsRecipeCard = ( { recipe } ) => {
    const [ quantities, setQuantities ] = useState( [] );
    const [ ingredients, setIngredients ] = useState( [] );
    const { strDrink, strDrinkThumb, strInstructions } = recipe;

    const capitalizeInstructions = strInstructions.charAt( 0 ).toUpperCase() + strInstructions.slice( 1 );

    useEffect( () => {
        for( let key of Object.keys( recipe ) ) {
            if( key.includes( 'strIngredient' ) && recipe[ key ] ) {
                setIngredients( ingredients => (
                    [
                        ...ingredients,
                        recipe[ key ]
                    ]
                ) );
            }

            if( key.includes( 'strMeasure' ) && recipe[ key ] ) {
                setQuantities( quantities => (
                    [
                        ...quantities,
                        recipe[ key ]
                    ]
                ) );
            }
        }
    }, [ recipe ] );

    return (
        <div className="card animate__animated animate__fadeIn" style={ { width: '100%' } }>
            <div className="row">
                <ImageCard
                    image={ strDrinkThumb }
                    name={ strDrink }
                />

                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title card-title-modal">{ strDrink }</h5>

                        <div className="row">
                            <IngredientsCard ingredients={ ingredients } />

                            <QuantitiesCard quantities={ quantities } />
                        </div>

                        <p className="card-text text-justify">{ capitalizeInstructions }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

DetailsRecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default DetailsRecipeCard;
