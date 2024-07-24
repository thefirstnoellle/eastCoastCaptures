// Manage.js
import { useState, useContext } from "react";
import { PhotoContext } from "./PhotoContext";

function Manage() {
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
    <div className="manageImages">
      <h1>Manage Images</h1>
      <form onSubmit={handleSubmit} className="manageForm">
        <div className="inputImageURL">
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
        <div className="inputImageName">
          <label>
            Image Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit" className="submitImage">Add Image</button>
      </form>
    </div>
  );
};

export default Manage
