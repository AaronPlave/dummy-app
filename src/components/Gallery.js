import React, { PropTypes } from 'react';
import GalleryImage from './GalleryImage';
import InfiniteScroll from 'react-infinite-scroller'; // eslint-disable-line

export const Gallery = (props) => {
    let galleryImages = (
        Object.keys(props.images).map(img =>
            <GalleryImage 
            key={props.images[img].url}
            id={props.images[img].id}
            onImageLoad={props.onImageLoad}
            palette={props.images[img].palette}
            src={props.images[img].url} />
        )
    );
    return (
        <div>
            <InfiniteScroll
                pageStart={0}
                initialLoad={false}
                loadMore={props.loadMoreImages}
                // loadMore={loadMore}
                hasMore={props.moreImages}
                // hasMore={true}
                loader={<div className="loader">Loading ...</div>}>
                {galleryImages}
            </InfiniteScroll>
        <br />
      </div>
    );
};

Gallery.propTypes = {
    images: PropTypes.array.isRequired,
    moreImages: PropTypes.bool.isRequired,
    loadMoreImages: PropTypes.func.isRequired
};

export default Gallery;
