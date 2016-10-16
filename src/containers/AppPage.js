import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import * as actions from '../actions/appActions';
// import * as appConfig from '../constants/appConfig';

export const AppPage = (props) => {
    return (
        <App 
          actions={props.actions}
          children={props.children}
          loadInitialApplicationState={props.actions.loadInitialApplicationState}
        />
    );
};

AppPage.propTypes = {
    actions: PropTypes.object.isRequired,
    children: PropTypes.element
};

function mapStateToProps(state) {
    return {
        // galleryImages: state.galleryImages
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
)(AppPage);
