// Manage.js
import { useState, useContext } from "react";
import { PhotoContext } from "./PhotoContext";

export const Manage = () => {
  const { photos, setPhotos } = useContext(PhotoContext);
  const [imageURL, setImageURL] = useState('');
  const [name, setName] = useState('');

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
          <label>
            Image URL:
            <input 
              type="text" 
              value={imageURL} 
              onChange={(e) => setImageURL(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Add Photo</button>
      </form>
    </div>
  );
};
