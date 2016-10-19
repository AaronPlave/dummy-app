import ColorThief from 'color-thief';
import * as appConfig from '../constants/appConfig';

export default class ColorHelper {
    static rgbFromArray(rgbArray) {
        if (!rgbArray) {
            return false;
        }
        if (rgbArray.constructor !== Array) {
            return false;
        }
        if (rgbArray.length !== 3) {
            return false;
        }
        // Verify each value is an integer between 0-255
        let validValues = rgbArray.filter(x => {
            return typeof x === 'number' &&
                (x % 1) === 0 &&
                x >= 0 &&
                x <= 255;
        });
        if (validValues.length !== 3) {
            return false;
        }
        return "rgb(" + rgbArray.join(",") + ")";
    }

    static calculatePalette(src) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.responseType = "blob";
            xhr.onload = function() {
                window.URL = window.URL || window.webkitURL; // support for Safari/old Chrome
                let img = document.createElement('img');
                img.src = window.URL.createObjectURL(xhr.response);
                img.onload = function() {
                    let palette = ColorThief.prototype.getPalette(img, appConfig.NUM_PALETTE_COLORS);

                    // Use this after you're done with the image and no longer needed
                    window.URL.revokeObjectURL(img.src);
                    resolve(palette);
                };
                img.onerror = function() {
                    reject();
                };
            };
            xhr.open('GET', src + "?" + new Date()); // We add a timestamp here to not interrupt the AsyncImage loading
            xhr.send();
        });
    }
}
