import React from 'react';
import './imageList.css';
import ImageCart from './ImageCart';

const ImageList = (props) => {
    const images = props.images.map(image => {
        return <ImageCart key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;
