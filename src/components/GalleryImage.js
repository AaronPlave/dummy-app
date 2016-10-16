import React, { PropTypes } from 'react';
import AsyncImage from '../containers/AsyncImage';

const GalleryImage = (props) => {
    return (
        <div className="thumbnail-image-container">
          <AsyncImage 
            className="thumbnail-image" 
            src={props.src} />
        </div>
    );
};

GalleryImage.propTypes = {
    src: PropTypes.string.isRequired
};

export default GalleryImage;
