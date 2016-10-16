import * as types from '../constants/actionTypes';
import colorHelper from '../utils/colorHelper';

// example of a thunk using the redux-thunk middleware
// export function saveFuelSavings(settings) {
//   return function (dispatch) {
//     // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
//     // in this case at this point we could call a service that would persist the fuel savings
//     return dispatch({
//       type: types.SAVE_FUEL_SAVINGS,
//       dateModified: dateHelper.getFormattedDateTime(),
//       settings
//     });
//   };
// }

export function calculateColorPalette(url, id) {
    return (dispatch) => new Promise(() => {
    	colorHelper.calculatePalette(url).then(palette => {
	        dispatch({ type: types.CALCULATE_COLOR_PALETTE, id, palette })
    	})
    })
    // .then(palette => {
    // 	console.log(palette,"oh hey");
    // }).catch(err => {
    // 	console.warn("oh no palette no good", err);
    // })
}
