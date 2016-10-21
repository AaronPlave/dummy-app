import * as actionTypes from '../constants/actionTypes';
import * as appActions from './appActions';

import { expect } from 'chai';

describe('Actions', () => {
    it('should create an action to load initial application state', () => {
        const actual = appActions.loadInitialApplicationState();
        const expected = { type: actionTypes.LOAD_INITIAL_APPLICATION_STATE };

        expect(actual).to.deep.equal(expected); // Notice use of deep because it's a nested object
    });
});
