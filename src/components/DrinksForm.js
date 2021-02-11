import React, { useContext, useState } from 'react';
import validator from 'validator';
import { DrinksContext } from '../context/DrinksContext';
import useForm from '../hooks/useForm';
import isValidDrinksForm from '../helpers/isValidDrinksForm';
import CategorySelect from './DrinksForm/CategorySelect';
import IngredientInput from './DrinksForm/IngredientInput';
import SubmitButton from './DrinksForm/SubmitButton';

const DrinksForm = () => {
    const { setDrinks } = useContext( DrinksContext );

    const [ formValues, handleChange, reset ] = useForm( { category: '', ingredient: '' } );
    const { category, ingredient } = formValues;

    const [ error, setError ] = useState( null );
    const [ disabled, setDisabled ] = useState( false );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setDisabled( true );

        const escapedCategory = validator.escape( category );
        const escapedIngredient = validator.escape( ingredient );

        const { errorDrinks, isValid } = isValidDrinksForm( escapedCategory, escapedIngredient );
        setError( errorDrinks );

        if( isValid ) {
            setDrinks( drinks => (
                {
                    ...drinks,
                    category: escapedCategory.replace( /-/g, '/' ),
                    ingredient: escapedIngredient
                }
            ) );

            reset();
        }

        setDisabled( false );
    };

    return (
        <div className="row">
            <form className="col-12 pb-4" autoComplete="off" onSubmit={ handleSubmit }>
                <div className="row">
                    <IngredientInput
                        ingredient={ ingredient }
                        handleChange={ handleChange }
                        error={ error ? error : '' }
                    />

                    <CategorySelect
                        category={ category }
                        handleChange={ handleChange }
                        error={ error ? error : '' }
                    />
                </div>

                <div className="row">
                    <SubmitButton disabled={ disabled } />
                </div>
            </form>
        </div>
    );
};

export default DrinksForm;
