import { CALCULATE_COLOR_PALETTE, LOAD_INITIAL_APPLICATION_STATE } from '../constants/actionTypes';
import mathHelper from '../utils/mathHelper';
import * as images from '../data/urls';
import * as appConfig from '../constants/appConfig';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

const loadInitialApplicationState = (state) => {
    let newState = objectAssign({}, state);
    let randomizedImageUrls = mathHelper.shuffle(images.imageUrls.urls);
    newState.images = randomizedImageUrls.slice(0, appConfig.GALLERY_PAGE_IMAGES_PER_PAGE).map(x => {
        return { url: x, id: x, palette: [] };
    });
    return newState;
};

const calculateColorPalette = (state, action) => {
    let newState = objectAssign({}, state);
    // Find object
    let newImages = newState.images.map(x => {
        if (x.id === action.id) {
            return objectAssign({}, x, { palette: action.palette });
        }
        return x;
    });
    newState.images = newImages;
    return newState;
};

export default function galleryImages(state = initialState.galleryImages, action) {
    switch (action.type) {
        case LOAD_INITIAL_APPLICATION_STATE:
            return loadInitialApplicationState(state, action);

        case CALCULATE_COLOR_PALETTE:
            return calculateColorPalette(state, action);

        default:
            return state;
    }
}
