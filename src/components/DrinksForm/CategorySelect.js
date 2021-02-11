import React from 'react';
import PropTypes from 'prop-types';
import useAxios from '../../hooks/useAxios';
import Option from './CategorySelect/Option';

const CategorySelect = ( { category, handleChange, error } ) => {
    const { data: categoriesAPI, loading, error: errorAPI } = useAxios( 'list' );

    const sortCategories = categoriesAPI.map( categoryAPI => {
        const newCategory = categoryAPI.strCategory.replace( /\//g, '-' );
        return newCategory;
    } ).sort();

    return (
        <div className="col-md-5 mb-2">
            <label htmlFor="category" className="form-label">Categoría</label>
            <select
                id="category"
                name="category"
                className={ `form-control ${ error && 'is-invalid' }` }
                value={ category }
                onChange={ handleChange }
            >
                <option value="" defaultValue>-Seleccione una categoría-</option>

                { loading && <Option value="" text="Loading..." /> }

                {
                    errorAPI
                        ?
                            <Option value="" text="Recargue el sitio nuevamente." />
                        :
                            sortCategories.map( sortCategory => (
                                <Option
                                    key={ sortCategory }
                                    value={ sortCategory }
                                    text={ sortCategory }
                                />
                            ) )
                }
            </select>
            <div className="invalid-feedback">
                { error }
            </div>
        </div>
    );
};

CategorySelect.propTypes = {
    category: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};

export default CategorySelect;
