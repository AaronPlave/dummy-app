import React from 'react';
import GalleryImage from './GalleryImage';

export const Gallery = (props) => {
    return (
        <div>
         {Object.keys(props.images).map(img => 
          <GalleryImage 
            key={props.images[img].url}
            id={props.images[img].id}
            onImageLoad={props.onImageLoad}
            palette={props.images[img].palette}
            src={props.images[img].url} />
            )
        }
        <br />
      </div>
    );
};

export default Gallery;
