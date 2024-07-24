import React, { useState, useContext } from "react";
import { PhotoContext } from "./PhotoContext"; // I have no idea what this means or does

function Manage() {
  const { photos, setPhotos } = useContext(PhotoContext);
  const [imageURL, setImageURL] = useState('');
  const [name, setName] = useState('');

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageURL && name) {
      const newPhoto = { imageURL, name };
      setPhotos([...photos, newPhoto]);
      setImageURL(''); 
      setName('');
    }
  };

  return (
    <div>
      <h1>Manage Photos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image URL:</label>
            <input 
              value={imageURL} 
              onChange={(e) => setImageURL(e.target.value)} 
              type="text"
              required 
            />
        </div>
        <div>
          <label>Name:</label>
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              required 
            />
        </div>
        <button type="submit">Add Photo</button>
      </form>
      
      <div>
        <h2>Gallery</h2> 
        {/* separate into gallery component */}
        <ul>
          {photos.map((photo, index) => (
            <li key={index}>
              <p>Name: {photo.name}</p>
              <img src={photo.imageURL} alt={photo.name} style={{ maxWidth: '100px' }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Manage