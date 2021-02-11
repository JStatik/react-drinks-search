import React from 'react';
import PropTypes from 'prop-types';

const IngredientInput = ( { ingredient, handleChange, error } ) => {
    return (
        <div className="col-md-5 offset-md-1 mb-2">
            <label htmlFor="ingredient" className="form-label">Ingrediente</label>
            <input
                type="text"
                id="ingredient"
                name="ingredient"
                placeholder="Ingrediente"
                className={ `form-control ${ error && 'is-invalid' }` }
                value={ ingredient }
                onChange={ handleChange }
            />
            <div className="invalid-feedback">
                { error }
            </div>
        </div>
    );
};

IngredientInput.propTypes = {
    ingredient: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};

export default IngredientInput;
