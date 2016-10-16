import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AsyncImage from './AsyncImage'; // eslint-disable-line import/no-named-as-default

describe('<AsyncImage />', () => {
    it('should have an img with style "display:none" and src "test"', () => {
        const wrapper = shallow(<AsyncImage src="test" className="" errorClassName="" />);
        const actual = wrapper.find('img');
        const actualStyle = actual.prop('style');
        const expectedStyle = { 'display': 'none' };
        const actualSrc = actual.prop('src');
        const expectedSrc = 'test';

        expect(actualStyle).to.deep.equal(expectedStyle);
        expect(actualSrc).to.equal(expectedSrc);
    });

    it('should have a div with style transition:opacity 0.3s and className "test"', () => {
        const wrapper = shallow(<AsyncImage src="" className="test" errorClassName="" />);
        const actual = wrapper.find('span');
        const actualStyle = actual.prop('style');
        const expectedStyle = { 'transition': 'opacity 0.3s' };
        const actualClassName = actual.prop('className');
        const expectedClassName = 'test';

        expect(actualStyle).to.deep.equal(expectedStyle);
        expect(actualClassName).to.equal(expectedClassName);
    });
});
