import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import GalleryImage from './GalleryImage';
import { Palette } from './Palette';
import AsyncImage from './AsyncImage'; // eslint-disable-line import/no-named-as-default

describe('<GalleryImage />', () => {
    it('should contain <AsyncImage />', () => {
        const wrapper = shallow(<GalleryImage src="?" palette={[]} onImageLoad={()=>{}} id="?"/>);

        expect(wrapper.find(AsyncImage)).to.be.length(1);
    });

    it('should have contain with \'thumbnail-image-container\' class', () => {
        const wrapper = shallow(<GalleryImage src="?" palette={[]} onImageLoad={()=>{}} id="?"/>);
        const actual = wrapper.find('div').prop('className');
        const expected = 'thumbnail-image-container';

        expect(actual).to.equal(expected);
    });

    it('should have an <AsyncImage /> with \'thumbnail-image\' class', () => {
        const wrapper = shallow(<GalleryImage src="?" palette={[]} onImageLoad={()=>{}} id="?"/>);
        const actual = wrapper.find(AsyncImage).prop('className');
        const expected = 'thumbnail-image';

        expect(actual).to.equal(expected);
    });

    it('should have a <Palette />', () => {
        const wrapper = shallow(<GalleryImage src="?" palette={[]} onImageLoad={()=>{}} id="?"/>);
        
        expect(wrapper.find(Palette)).to.be.length(1);
    });
});
