import React, { PropTypes } from 'react';
import * as appConfig from '../constants/appConfig';
// import Color from './Color';

export const Palette = (props) => {
    let determineStyles = (colors => {
        if (colors.length === appConfig.NUM_PALETTE_COLORS) {
            return colors.map(color => {
                return { background: "rgb(" + color.join(",") + ")" };
            });
        } else {
            let arr = [];
            for (let i = 0; i < appConfig.NUM_PALETTE_COLORS; i++) {
                arr.push({});
            }
            return arr;
        }
    });

    let styles = determineStyles(props.colors);
    return (
        <span className="palette-container">
            {styles.map((style, index) => 
                <span key={index} className="color" style={style} />    
            )}
        </span>
    );
};

Palette.propTypes = {
    colors: PropTypes.array.isRequired
};

export default Palette;
