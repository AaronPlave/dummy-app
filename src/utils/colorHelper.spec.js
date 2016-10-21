import { expect } from 'chai';
// import chai, {expect} from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
import ColorHelper from './colorHelper';

// chai.use(sinonChai);

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

    describe('calculatePalette', () => {
        it('Returns a promise', () => {
            expect(ColorHelper.calculatePalette("test")).to.be.a("promise");
        });

        // let xhr, requests;
        // before(function() {
        //     xhr = sinon.useFakeXMLHttpRequest();
        //     requests = [];
        //     xhr.onCreate = function(req) { requests.push(req); };
        // });

        // after(function() {
        //     // Like before we must clean up when tampering with globals.
        //     xhr.restore();
        // });
        // it('Resolves to a valid color palette with number of colors matching appConfig.NUM_PALETTE_COLORS', () => {
        //     return ColorHelper.calculatePalette("test").then(result => {
        //         console.log(result, "results")
        //         expect(result).to.be.an("array");
        //     }, err => {
        //         console.log(err, "err")
        //         return false;
        //     })
        // });
    });
});
