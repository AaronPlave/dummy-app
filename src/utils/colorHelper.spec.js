import { expect } from 'chai';
import ColorHelper from './colorHelper';

describe('Color Helper', () => {
    describe('rgbFromArray', () => {
        it('Returns false for values not of type Array', () => {
            expect(ColorHelper.rgbFromArray("")).to.be.false;
            expect(ColorHelper.rgbFromArray()).to.be.false;
            expect(ColorHelper.rgbFromArray(null)).to.be.false;
            expect(ColorHelper.rgbFromArray(1)).to.be.false;
            expect(ColorHelper.rgbFromArray(1.0)).to.be.false;
            expect(ColorHelper.rgbFromArray({})).to.be.false;
        });
        it('Returns false for arrays of length not equal to 3', () => {
            expect(ColorHelper.rgbFromArray([])).to.be.false;
            expect(ColorHelper.rgbFromArray([1])).to.be.false;
            expect(ColorHelper.rgbFromArray([1, 2, 3, 4])).to.be.false;
        });
        it('Returns false for arrays that contain non-Number type members', () => {
            expect(ColorHelper.rgbFromArray(["", "", ""])).to.be.false;
            expect(ColorHelper.rgbFromArray(["", 1, 1222])).to.be.false;
            expect(ColorHelper.rgbFromArray([{ a: 1 },
                [], 1.0
            ])).to.be.false;
            expect(ColorHelper.rgbFromArray([1.0, 1.0, 1.1])).to.be.false;
        });
        it('Returns false for arrays that contain numbers less than 0 and/or numbers greater than 255', () => {
            expect(ColorHelper.rgbFromArray([0, 0, -1])).to.be.false;
            expect(ColorHelper.rgbFromArray([256, -1, 255])).to.be.false;
        });
        it('Returns correctly ordered css rgba string for valid rgbArrays', () => {
            expect(ColorHelper.rgbFromArray([0, 0, 0])).to.equal("rgb(0,0,0)");
            expect(ColorHelper.rgbFromArray([0, 255, 0])).to.equal("rgb(0,255,0)");
        });
    });
});
