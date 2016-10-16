import React from 'react';
import GalleryImage from './GalleryImage';
import * as images from '../data/urls';
import mathHelper from '../utils/mathHelper';
import * as appConfig from '../constants/appConfig';

export const GalleryPage = () => {
    let randomizedImageUrls = mathHelper.shuffle(images.imageUrls.urls);
    let urlSubset = randomizedImageUrls.splice(0,appConfig.GALLERY_PAGE_IMAGES_PER_PAGE);
    return (
      <div>
         {urlSubset.map(src => 
          <GalleryImage 
            key={src}
            src={src} />
            )
        }
      </div>
    );
};

export default GalleryPage;