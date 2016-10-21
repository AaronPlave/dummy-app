import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import GalleryImage from './GalleryImage';
import { Palette } from './Palette';
import AsyncImage from './AsyncImage'; // eslint-disable-line import/no-named-as-default

chai.use(sinonChai);

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

    it('should call passed onImageLoad function with correct parameters', () => {
        const cb = sinon.spy();
        const onImageLoad = (imgEl, id) => { return cb(imgEl, id); };
        const wrapper = shallow(<GalleryImage src="!" palette={[]} onImageLoad={onImageLoad} id="?"/>);
        expect(wrapper.find(Palette)).to.be.length(1);

        cb.should.not.have.been.called; // Make sure it has never been called
        wrapper.instance().props["onImageLoad"]("el","id"); // Get the prop from instance, call it with param
        expect(cb.calledOnce).to.be.true; // Make sure it has been called once
        expect(cb).to.have.been.calledWith("el","id"); // Make sure it has been called once
    });
});
