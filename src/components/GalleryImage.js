import React, { PropTypes } from 'react';
import AsyncImage from './AsyncImage'; // eslint-disable-line import/no-named-as-default

const GalleryImage = (props) => {
    return (
        <div className="thumbnail-image-container">
          <AsyncImage 
            className="thumbnail-image" 
            errorClassName="thumbnail-image-error" 
            src={props.src} />
        </div>
    );
};

GalleryImage.propTypes = {
    src: PropTypes.string.isRequired
};

export default GalleryImage;
