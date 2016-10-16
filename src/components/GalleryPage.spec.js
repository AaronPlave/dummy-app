import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { GalleryPage } from './GalleryPage';
import GalleryImage from './GalleryImage';
import * as appConfig from '../constants/appConfig';

describe('<GalleryPage />', () => {
    it('should contain <GalleryImage />', () => {
        const wrapper = shallow(<GalleryPage />);

        expect(wrapper.find(GalleryImage)).to.be.length(appConfig.GALLERY_PAGE_IMAGES_PER_PAGE);
    });
});
