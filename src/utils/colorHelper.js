import colorThief from 'color-thief';
export default class ColorHelper {
    static calculatePalette(src) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.responseType = "blob";
            xhr.onload = function() {
                window.URL = window.URL || window.webkitURL; // support for Safari/old Chrome
                let img = document.createElement('img');
                img.src = window.URL.createObjectURL(xhr.response);
                img.onload = function() {
                    let palette = colorThief.prototype.getPalette(img, 5);

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