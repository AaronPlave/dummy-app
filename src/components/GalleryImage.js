import React, { PropTypes } from 'react';
import AsyncImage from './AsyncImage'; // eslint-disable-line import/no-named-as-default
import { Palette } from './Palette';

const GalleryImage = (props) => {
    // const onImageLoad = (imgEl) => {
    //     props.onImageLoad(imgEl, props.id);
    // };

    // console.log(onImageLoad.toString(),"oni")

    return (
        <div className="thumbnail-image-container">
          <AsyncImage 
            className="thumbnail-image" 
            errorClassName="thumbnail-image-error" 
            // onImageLoad={onImageLoad}
            onImageLoad={props.onImageLoad}
            src={props.src}
            id={props.id} />
          <Palette colors={props.palette} />
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
