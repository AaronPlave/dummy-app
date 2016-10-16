import { LOAD_INITIAL_APPLICATION_STATE } from '../constants/actionTypes';
// import calculator from '../utils/fuelSavingsCalculator';
// import colorHelper from '../utils/colorHelper';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function galleryImages(state = initialState.isLoaded, action) {
    let newState;

    switch (action.type) {
        // case SAVE_FUEL_SAVINGS:
        //     // For this example, just simulating a save by changing date modified.
        //     // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
        //     return objectAssign({}, state, {
        //         dateModified: action.dateModified
        //     });

        // case LOAD_INITIAL_APPLICATION_STATE:
            // newState = objectAssign({}, state);
            // newState.images = objectAssign({}.img1 = colorHelper.calculatePalette(action.imgEl);
            // newState.images = {
            //         img1: {
            //             url: "https://farm8.staticflickr.com/7569/26810946034_2a7c379db6.jpg",
            //             loaded: false,
            //             palette: colorHelper.calculatePalette(action.imgEl)
            //         }
            //     }
            // console.log("LOADED", action)
            // return true;

        default:
            return state;
    }
}
