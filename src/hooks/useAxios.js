import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const useAxios = ( category, ingredient ) => {
    const isMountedRef = useRef( true );
    const [ state, setState ] = useState( {
        data: [],
        loading: ( category === '' && !ingredient ) ? false : true,
        error: null
    } );

    useEffect( () => {
        return () => {
            isMountedRef.current = false;
        }
    }, [] )

    useEffect( () => {
        if( category !== '' ) {
            setState( { data: [], loading: true, error: null } );

            const getCategories = async() => {
                try{
                    const url =
                        !ingredient
                            ? 
                        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=${ encodeURI( category ) }`
                            :
                        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${ encodeURI( category ) }&i=${ encodeURI( ingredient ) }`;
    
                    const response = await axios.get( url );
                    const data = response.data?.drinks;
    
                    if( data ) {   
                        isMountedRef.current
                            &&
                        setState( {
                            data: data,
                            loading: false,
                            error: null
                        } );
                    } else {
                        isMountedRef.current
                            &&
                        setState( {
                            data: [],
                            loading: false,
                            error: 'Error en la peticion'
                        } );
                    }           
                } catch( err ) {
                    setState( { data: [], loading: false, error: err } );
                }                
            };
    
            getCategories();
        }
    }, [ category, ingredient ] );

    return state;
};

export default useAxios;
