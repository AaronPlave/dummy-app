import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Gallery } from './Gallery';
import GalleryImage from './GalleryImage';
import * as appConfig from '../constants/appConfig';

describe('<Gallery />', () => {
    it('should contain <GalleryImage />', () => {
        let images = []
        for (let i = 0; i < appConfig.GALLERY_PAGE_IMAGES_PER_PAGE; i++) {
            images.push({
                src: "url-" + Math.random().toString(),
                id: "?",
                onImageLoad: () => {},
                palette: []
            })
        }
        const wrapper = shallow(<Gallery images={images}/>);
        expect(wrapper.find(GalleryImage)).to.be.length(appConfig.GALLERY_PAGE_IMAGES_PER_PAGE);
    });
});
