import React from 'react';

function FeaturedImage({ images = [] }) {

return (

<div className="featuredContainer">
  <div className="featured">
    {images.map((image, index) => (
    <img key={index} src={image} />
    ))}
    </div>
</div>
);
}
 
export default FeaturedImage;