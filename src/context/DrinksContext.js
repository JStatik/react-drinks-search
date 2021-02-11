import React, { createContext, useRef, useState } from 'react';
import useAxios from '../hooks/useAxios';
import useFetch from '../hooks/useFetch';

const DrinksContext = createContext();

const DrinksProvider = ( { children } ) => {
    const titlePage = useRef();

    const [ drinks, setDrinks ] = useState( { category: '', ingredient: '', openModal: false, idRecipe: '' } );
    const { category, ingredient, openModal, idRecipe } = drinks;
    
    const recipes = useAxios( category, ingredient );
    const detailRecipe = useFetch( idRecipe );

    return (
        <DrinksContext.Provider
            value={
                {
                    titlePage,
                    setDrinks,
                    recipes,
                    openModal,
                    detailRecipe
                }
            }
        >
            { children }
        </DrinksContext.Provider>
    );
};

export {
    DrinksContext,
    DrinksProvider
};
