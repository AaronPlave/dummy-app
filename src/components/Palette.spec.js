import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Palette } from './Palette';
import * as appConfig from '../constants/appConfig';
import ColorHelper from '../utils/colorHelper';

describe('<Palette />', () => {
    it('should contain the correct number of colors when no colors given and each color should have no style', () => {
        const wrapper = shallow(<Palette colors={[]}/>);
        const colorSpans = wrapper.findWhere(x => x.prop('className') === 'color');
        expect(colorSpans).to.have.length(appConfig.NUM_PALETTE_COLORS);
        colorSpans.map(c => {
            expect(c.prop('style')).to.be.empty;
        });
    });

    it('should contain the correct number of colors when colors given and each color should have the correct style', () => {
        let colors = [];
        for (let i = 0; i < appConfig.NUM_PALETTE_COLORS; i++) {
            colors.push([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]);
        }
        const wrapper = shallow(<Palette colors={colors}/>);
        const colorSpans = wrapper.findWhere(x => x.prop('className') === 'color');
        expect(colorSpans).to.have.length(appConfig.NUM_PALETTE_COLORS);
        colorSpans.map((c, index) => {
            expect(c.prop('style')).to.deep.equal({ background: ColorHelper.rgbFromArray(colors[index]) });
        });
    });

    it('should contain the correct number of colors when a partial set of colors is given and each color should have the correct style', () => {
        let colors = ["imnotacolor"];
        for (let i = 0; i < appConfig.NUM_PALETTE_COLORS - 1; i++) {
            colors.push([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]);
        }
        const wrapper = shallow(<Palette colors={colors}/>);
        const colorSpans = wrapper.findWhere(x => x.prop('className') === 'color');
        expect(colorSpans).to.have.length(appConfig.NUM_PALETTE_COLORS);
        colorSpans.map((c, index) => {
            if (index === 0) {
                expect(c.prop('style')).to.be.empty;
            } else {
                expect(c.prop('style')).to.deep.equal({ background: ColorHelper.rgbFromArray(colors[index]) });
            }
        });
    });
});
