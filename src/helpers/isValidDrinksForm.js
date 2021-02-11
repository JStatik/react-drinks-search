import validator from 'validator';

const isValidDrinksForm = ( category, ingredient ) => {
    if( validator.isEmpty( ingredient ) || !validator.isAlpha( ingredient, [ 'es-ES' ], { ignore: ' -0123456789' } ) ) {
        return {
            errorDrinks: 'Todos los campos son obligatorios.',
            isValid: false
        };
    } else if( validator.isEmpty( category ) || !validator.isAlpha( category, [ 'es-ES' ], { ignore: ' -0123456789' } ) ) {
        return {
            errorDrinks: 'Todos los campos son obligatorios.',
            isValid: false
        };
    }

    return {
        errorDrinks: null,
        isValid: true
    };
};

export default isValidDrinksForm;
