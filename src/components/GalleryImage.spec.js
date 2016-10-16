import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import GalleryImage from './GalleryImage';
import AsyncImage from '../containers/AsyncImage'; // eslint-disable-line import/no-named-as-default

describe('<GalleryImage />', () => {
    it('should contain <AsyncImage />', () => {
        const wrapper = shallow(<GalleryImage src={""}/>);

        expect(wrapper.find(AsyncImage)).to.be.length(1);
    });

    it('should have a div with \'thumbnail-image-container\' class', () => {
        const wrapper = shallow(<GalleryImage src={""}/>);
        const actual = wrapper.find('div').prop('className');
        const expected = 'thumbnail-image-container';

        expect(actual).to.equal(expected);
    });

    it('should have an <AsyncImage /> with \'thumbnail-image\' class', () => {
        const wrapper = shallow(<GalleryImage src={""}/>);
        const actual = wrapper.find(AsyncImage).prop('className');
        const expected = 'thumbnail-image';

        expect(actual).to.equal(expected);
    });
});
