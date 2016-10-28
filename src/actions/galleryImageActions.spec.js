import * as actionTypes from '../constants/actionTypes';
import * as galleryImageActions from './galleryImageActions';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

chai.use(sinonChai);

describe('Actions', () => {
    it('should create an action to load more images', () => {
        const actual = galleryImageActions.loadMoreImages();
        const expected = { type: actionTypes.LOAD_MORE_IMAGES };

        expect(actual).to.deep.equal(expected); // Notice use of deep because it's a nested object
    });

    let xhr;
    // let model;
    // let options;
    let requests;


    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();
        global.XMLHttpRequest = xhr;
        requests = [];
        /* eslint no-shadow: 1*/
        xhr.onCreate = (xhr) => {
            requests.push(xhr);
        };
        // model = { id: 42 };
        // model.toJSON = () => {
        //     return model;
        // };
        // options = {};
        // options.success = expect.createSpy();
        // options.error = expect.createSpy();
    });

    afterEach(() => {
        xhr.restore();
    });

    it('should create an action to calculate a color palette', () => {
        const dispatch = sinon.spy();
        const expected = {
            type: actionTypes.CALCULATE_COLOR_PALETTE,
            url: "test.com",
            id: "123"
        };
        // console.log("blob", new Blob)

        // we expect this to return a function since it is a thunk
        expect(typeof(galleryImageActions.calculateColorPalette(expected.url, expected.id))).to.equal('function');
        // then we simulate calling it with dispatch as the store would do
        expect(galleryImageActions.calculateColorPalette(expected.url, expected.id)(dispatch)).to.be.a('promise');
        // requests[0].respond(200, { 'Content-Type': 'application/octet-stream' }, 'Ok');
        // expect(dispatch).to.have.been.calledWith(expected);
        // console.log(galleryImageActions.calculateColorPalette(expected.url, expected.id)(dispatch),"DOS{")
        // return galleryImageActions.calculateColorPalette(expected.url, expected.id)(dispatch).then(result => {
        //     console.log("DONE", r)
        //     expect(dispatch).to.have.been.calledWith(expected);
        //     // done();
        // })
    });
});
