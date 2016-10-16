import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Gallery from '../components/Gallery';
// import * as images from '../data/urls';
import mathHelper from '../utils/mathHelper';
import * as actions from '../actions/galleryImageActions';
import * as appConfig from '../constants/appConfig';

export const GalleryPage = (props) => {
    // let randomizedImageUrls = mathHelper.shuffle(images.imageUrls.urls);
    // let urlSubset = randomizedImageUrls.splice(0, appConfig.GALLERY_PAGE_IMAGES_PER_PAGE);
    // console.log("RENDER GalleryPage",props.galleryImages);
    return (
        <Gallery 
          images={props.galleryImages.images}
          onImageLoad={props.actions.calculateColorPalette}
        />
    );
};

GalleryPage.propTypes = {
    actions: PropTypes.object.isRequired,
    galleryImages: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        galleryImages: state.galleryImages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GalleryPage);
