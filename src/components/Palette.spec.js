import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Palette } from './Palette';
import * as appConfig from '../constants/appConfig';


describe('<Palette />', () => {
    it('should contain the correct number of colors when no colors given and each color should have no style', () => {
        const wrapper = shallow(<Palette colors={[]}/>);
        const colorSpans = wrapper.findWhere(x => x.prop('className') === 'color');
        expect(colorSpans).to.have.length(appConfig.NUM_PALETTE_COLORS);
        colorSpans.map(c => {
            expect(c.prop('style')).to.be.empty;
        })
    });
});
