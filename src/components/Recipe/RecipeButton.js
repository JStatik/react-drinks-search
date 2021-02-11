import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DrinksContext } from '../../context/DrinksContext';

const RecipeButton = ( { id } ) => {
    const { setDrinks } = useContext( DrinksContext );

    const handleClick = () => {
        setDrinks( drinks => (
            {
                ...drinks,
                idRecipe: id,
                openModal: true
            }
        ) );
    };

    return (
        <>
            <div className="col-12 p-0">
                <button
                    className="btn btn-block btn-danger btn-recipe"
                    onClick={ handleClick }
                >
                    Receta
                </button>
            </div>
        </>
    );
};

RecipeButton.propTypes = {
    id: PropTypes.string.isRequired
};

export default RecipeButton;
