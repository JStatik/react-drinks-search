import React, { useContext } from 'react';
import { DrinksContext } from '../context/DrinksContext';
import DetailsRecipe from '../components/DetailsRecipe';
import DrinksForm from '../components/DrinksForm';
import Error from '../components/Error';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Recipe from '../components/Recipe';
import ScrollButton from '../components/ScrollButton';

const DrinksSearch = () => {
    const { recipes } = useContext( DrinksContext );
    const { data: dataRecipes, loading, error } = recipes;
    
    return (
        <>
            <Header />

            <div className="container mt-3">
                <DrinksForm />

                {
                    loading
                        ?
                            <Loading height="395px" />
                        :
                            ( error && dataRecipes.length < 0 )
                                ?
                                    <Error height="355px" />
                                :
                                    <div className="row animate__animated animate__fadeIn">
                                        {
                                            dataRecipes.map( recipe => (
                                                <Recipe
                                                    key={ recipe.idDrink }
                                                    recipe={ recipe }
                                                />
                                            ) )
                                        }
                                    </div>
                }

                { dataRecipes.length > 0 && <ScrollButton /> }
            </div>

            <DetailsRecipe />
        </>
    );
};

export default DrinksSearch;
