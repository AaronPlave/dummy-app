import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/fuelSavingsActions';
import ReactDOM from 'react-dom';

export class AsyncImage extends Component {
    componentDidMount() {
        let imgLoader = ReactDOM.findDOMNode(this.refs.imgLoader);
        let imgDest = ReactDOM.findDOMNode(this.refs.imgDest);
        imgLoader.onload = null;
        imgLoader.onerror = null;
        imgDest.style.backgroundImage = "";

        let imgSrc = imgLoader.getAttribute('src');
        imgLoader.onload = () => { this.onImageLoad(); };
        imgLoader.onerror = () => { this.onImageError(); };
        imgLoader.src = imgSrc;
        // console.log("mounted", imgSrc);

    }
    componentWillUpdate(nextProps, nextState) {
        // Here we can catch props that are changing when component doesn't actually unmount
        let imgDest = ReactDOM.findDOMNode(this.refs.imgDest);
        imgDest.style.backgroundImage = "";
        // console.log("will update");
    }
    componentWillUnmount() {
        this.destroyLoader();
        // console.log("will unmount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps, nextState);
        return false;
    }

    onImageLoad() {
        let imgLoader = ReactDOM.findDOMNode(this.refs.imgLoader);
        let imgSrc = imgLoader.getAttribute('src');
        let imgDest = ReactDOM.findDOMNode(this.refs.imgDest);
        imgDest.style.backgroundImage = "url(" + imgSrc + ")";
        imgDest.style.opacity = "1";
        // console.log("Image loaded");
        this.props.onImageLoad(this.props.src, this.props.id);
    }

    onImageError() {
        let imgLoader = ReactDOM.findDOMNode(this.refs.imgLoader);
        let imgDest = ReactDOM.findDOMNode(this.refs.imgDest);
        // console.log("IMG DEST", imgDest)
        imgDest.classList.add(this.props.errorClassName);
        imgDest.style.opacity = "1";
    }

    destroyLoader() {
        let imgLoader = ReactDOM.findDOMNode(this.refs.imgLoader);
        let imgDest = ReactDOM.findDOMNode(this.refs.imgDest);
        imgLoader.onload = null;
        imgLoader.src = "";
        imgDest.style.backgroundImage = "";
        // console.log("loader destroyed");
    }
    render() {
        return (
            <div>
                <img id={this.props.id} style={{"display":"none"}} src={this.props.src} ref="imgLoader" />
                <span style={{"transition":"opacity 0.3s"}} className={this.props.className} ref="imgDest" />
            </div>
        );
    }
}

AsyncImage.propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    errorClassName: PropTypes.string.isRequired,
    onImageLoad: PropTypes.func.isRequired
};

export default AsyncImage;