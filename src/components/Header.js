import React, { useContext } from 'react';
import { DrinksContext } from '../context/DrinksContext';

const Header = () => {
    const { titlePage } = useContext( DrinksContext );

    return (
        <header className="bg-primary" ref={ titlePage }>
            <h1>Busca recetas de tragos</h1>
        </header>
    );
};

export default Header;
