import { useState } from 'react';

const useForm = ( initialState = {} ) => {
    const [ formValues, setFormValues ] = useState( initialState );

    const handleInput = ( event ) => {
        setFormValues( {
            ...formValues,
            [ event.target.name ]: event.target.value
        } );
    };

    const reset = ( newState = initialState ) => {
        setFormValues( newState );
    };

    return [ formValues, handleInput, reset ];
};

export default useForm;
