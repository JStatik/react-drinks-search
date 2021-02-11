import React from 'react';
import PropTypes from 'prop-types';

const ImageCard = ( { image, name } ) => {
    return (
        <div className="col-md-5">
            <img
                src={ image }
                alt={ name }
                className="card-img"
            />
        </div>
    );
};

ImageCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ImageCard;
