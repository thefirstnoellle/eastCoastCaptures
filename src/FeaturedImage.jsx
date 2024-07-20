import React from 'react';

function FeaturedImage({ images = [] }) {

return (

<div className="galleryContainer">
  <div className="gallery">
    {images.map((image, index) => (
    <img key={index} src={image} />
    ))}
    </div>
</div>
);
}
 
export default FeaturedImage;