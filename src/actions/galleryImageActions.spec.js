import * as actionTypes from '../constants/actionTypes';
import * as galleryImageActions from './galleryImageActions';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

chai.use(sinonChai);

describe('Actions', () => {
    it('should create an action to calculate a color palette', () => {
        const dispatch = sinon.spy();
        const expected = {
            type: actionTypes.CALCULATE_COLOR_PALETTE,
            url: "test.com",
            id: "123"
        };

        // we expect this to return a function since it is a thunk
        expect(typeof(galleryImageActions.calculateColorPalette(expected.url, expected.id))).to.equal('function');
        // then we simulate calling it with dispatch as the store would do
        expect(galleryImageActions.calculateColorPalette(expected.url, expected.id)(dispatch)).to.be.a('promise');
        // expect(dispatch).to.have.been.calledWith(expected);
        // console.log(galleryImageActions.calculateColorPalette(expected.url, expected.id)(dispatch),"DOS{")
        // galleryImageActions.calculateColorPalette(expected.url, expected.id)(dispatch).then(result => {
        //     console.log("DONE", r)
        //     expect(dispatch).to.have.been.calledWith(expected);
        //     // done();
        // })
    });

    it('should create an action to load more images', () => {
        const actual = galleryImageActions.loadMoreImages();
        const expected = { type: actionTypes.LOAD_MORE_IMAGES };

        expect(actual).to.deep.equal(expected); // Notice use of deep because it's a nested object
    });
});
