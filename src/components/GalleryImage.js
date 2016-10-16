import React, { PropTypes } from 'react';
import AsyncImage from './AsyncImage'; // eslint-disable-line import/no-named-as-default

const GalleryImage = (props) => {
    const onImageLoad = (imgEl) => {
        props.onImageLoad(imgEl, props.id);
    };

    let colors = "";
    if (props.palette.length < 1) {
        colors = (<span className="palette-loading">Loading</span>);
    } else {
        colors = props.palette.map(color =>
            (<span key={color} className="color">{color}</span>)
        );
    }
    // console.log("RENDER GalleryImage", props.src);
    return (
        <div className="thumbnail-image-container">
          <AsyncImage 
            className="thumbnail-image" 
            errorClassName="thumbnail-image-error" 
            onImageLoad={onImageLoad}
            src={props.src}
            id={props.id} />
          <span className="palette-container">
            {colors}
          </span>
        </div>
    );
};

GalleryImage.propTypes = {
    src: PropTypes.string.isRequired,
    palette: PropTypes.array.isRequired,
    onImageLoad: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default GalleryImage;
