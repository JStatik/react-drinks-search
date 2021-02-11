import React from 'react';
import { DrinksProvider } from './context/DrinksContext';
import DrinksSearch from './pages/DrinksSearch';

const App = () => {
    return (
        <DrinksProvider>
            <DrinksSearch />
        </DrinksProvider>
    );
};

export default App;
