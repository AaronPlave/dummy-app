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
    });
});
