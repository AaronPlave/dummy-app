import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GalleryImage from './GalleryImage';
import * as images from '../data/urls';
import mathHelper from '../utils/mathHelper';

export const GalleryPage = (props) => {
    let randomizedImageUrls = mathHelper.shuffle(images.imageUrls.urls);
    let subset = randomizedImageUrls.splice(0,10);
    return (
      <div>
         {subset.map(src => 
          <GalleryImage 
            key={src}
            src={src} />
            )
        }
      </div>
    );
};

export default GalleryPage;