import React, { Component, PropTypes } from 'react';
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
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillUpdate() {
        // Here we can catch props that are changing when component doesn't actually unmount
        let imgDest = ReactDOM.findDOMNode(this.refs.imgDest);
        imgDest.style.backgroundImage = "";
    }
    
    componentWillUnmount() {
        this.destroyLoader();
    }

    onImageLoad() {
        let imgLoader = ReactDOM.findDOMNode(this.refs.imgLoader);
        let imgSrc = imgLoader.getAttribute('src');
        let imgDest = ReactDOM.findDOMNode(this.refs.imgDest);
        imgDest.style.backgroundImage = "url(" + imgSrc + ")";
        imgDest.style.opacity = "1";
        this.props.onImageLoad(this.props.src, this.props.id);
    }

    onImageError() {
        let imgDest = ReactDOM.findDOMNode(this.refs.imgDest);
        imgDest.classList.add(this.props.errorClassName);
        imgDest.style.opacity = "1";
    }

    destroyLoader() {
        let imgLoader = ReactDOM.findDOMNode(this.refs.imgLoader);
        let imgDest = ReactDOM.findDOMNode(this.refs.imgDest);
        imgLoader.onload = null;
        imgLoader.onerror = null;
        imgLoader.src = "";
        imgDest.style.backgroundImage = "";
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