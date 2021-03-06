import { CALCULATE_COLOR_PALETTE, LOAD_INITIAL_APPLICATION_STATE, LOAD_MORE_IMAGES } from '../constants/actionTypes';
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

const randomizedImageUrls = mathHelper.shuffle(images.imageUrls.urls);

const setGalleryImagesPage = (state) => {
    let newState = objectAssign({}, state);
    newState.imagePage += 1;
    newState.images = newState.images.concat(randomizedImageUrls.slice(appConfig.GALLERY_PAGE_IMAGES_PER_PAGE * (newState.imagePage - 1), appConfig.GALLERY_PAGE_IMAGES_PER_PAGE * newState.imagePage).map(x => {
        return { url: x, id: x, palette: [] };
    }));

    // Determine if there are more pages available
    newState.morePages = randomizedImageUrls.length - newState.images.length > 0;
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
            // Could have other flag info here or could refactor to
            // get rid of this action and just have everything use page action
            return setGalleryImagesPage(state, action);

        case LOAD_MORE_IMAGES:
            return setGalleryImagesPage(state, action);

        case CALCULATE_COLOR_PALETTE:
            return calculateColorPalette(state, action);

        default:
            return state;
    }
}
