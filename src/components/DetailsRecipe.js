import React, { useContext, useState } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DrinksContext } from '../context/DrinksContext';
import DetailsRecipeCard from './DetailsRecipe/DetailsRecipeCard';
import Error from './Error';
import Loading from './Loading';

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${ top }%`,
        left: `${ left }%`,
        transform: `translate( -${ top }%, -${ left }% )`
    };
};

const useStyles = makeStyles( theme => (
    {
        paper: {
            backgroundColor: 'rgba(230, 230, 230, 0.7)',
            boxShadow: theme.shadows[ 5 ],
            maxHeight: '95%',
            overflow: 'auto',
            padding: theme.spacing( 2, 4, 3 ),
            position: 'absolute',
            width: '75%'
        }
    }
) );

const DetailsRecipe = () => {
    const { setDrinks, detailRecipe, openModal } = useContext( DrinksContext );
    const { data: dataDetailRecipe, loading, error } = detailRecipe;

    const classes = useStyles();
    const [ modalStyle ] = useState( getModalStyle );

    const handleClose = () => {
        setDrinks( drinks => (
            {
                ...drinks,
                openModal: false
            }
        ) );
    };

    return (
        <div className="container">
            <Modal
                open={ openModal }
                onClose={ handleClose }
            >
                <div style={ modalStyle } className={ classes.paper }>
                    {
                        loading
                            ?
                                <Loading height="550px" />
                            :
                                ( error && Object.keys( dataDetailRecipe ).length < 0 )
                                    ?
                                        <Error height="550px" />
                                    :
                                        <DetailsRecipeCard recipe={ dataDetailRecipe } />
                    }
                </div>
            </Modal>
        </div>
    );
};

export default DetailsRecipe;
