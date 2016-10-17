import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Gallery } from '../components/Gallery';
import * as actions from '../actions/galleryImageActions';

export const GalleryPage = (props) => {
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
