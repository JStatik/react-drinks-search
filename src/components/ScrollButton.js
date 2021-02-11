import React, { useContext } from 'react';
import { DrinksContext } from '../context/DrinksContext';

const ScrollButton = () => {
    const { titlePage } = useContext( DrinksContext );

    const handleClick = () => {
        titlePage.current.scrollIntoView( { behavior: 'smooth' } );
    };

    return (
        <div className="row mt-3">
            <div className="col-md-10 offset-md-1 mb-4">
                <button
                    className="btn btn-block btn-primary"
                    onClick={ handleClick }
                >
                    Volver a buscar
                </button>
            </div>
        </div>
    );
};

export default ScrollButton;
