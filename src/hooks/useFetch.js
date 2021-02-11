import { useEffect, useRef, useState } from 'react';

const useFetch = ( id ) => {
    const isMountedRef = useRef( true );
    const [ state, setState ] = useState( { data: {}, loading: false, error: null } );

    useEffect( () => {
        return () => {
            isMountedRef.current = false;
        }
    }, [] )

    useEffect( () => {
        if( id !== '' ) {
            setState( { data: {}, loading: true, error: null } );

            const getDetailsRecipe = async() => {
                try{
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ id }`;
                    
                    const request = await fetch( url );
                    const response = await request.json();

                    if( !response.drinks ) {
                        isMountedRef.current
                            &&
                        setState( {
                            data: {},
                            loading: false,
                            error: 'Error en la petición.'
                        } );
                    } else {
                        isMountedRef.current
                            &&
                        setState( {
                            data: response.drinks[ 0 ],
                            loading: false,
                            error: null
                        } );
                    }
                } catch( err ) {
                    setState( { data: {}, loading: false, error: err } );
                }                
            };

            getDetailsRecipe();
        }
    }, [ id ] );

    return state;
};

export default useFetch;
