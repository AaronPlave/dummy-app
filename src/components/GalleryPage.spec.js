import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { GalleryPage } from './GalleryPage';
import GalleryImage from './GalleryImage';

describe('<GalleryPage />', () => {
    it('should contain <GalleryImage />', () => {
        const wrapper = shallow(<GalleryPage src={""}/>);

        expect(wrapper.find(GalleryImage)).to.be.length(10);
    });
});
