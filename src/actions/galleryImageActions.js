import * as types from '../constants/actionTypes';
import colorHelper from '../utils/colorHelper';

export function calculateColorPalette(url, id) {
    return (dispatch) => new Promise(() => {
        colorHelper.calculatePalette(url).then(palette => {
            dispatch({ type: types.CALCULATE_COLOR_PALETTE, id, palette });
        });
    });
}
