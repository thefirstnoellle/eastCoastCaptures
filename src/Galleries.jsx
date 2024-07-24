// Galleries.jsx
import { useContext } from "react";
import { PhotoContext } from "./PhotoContext";

function Galleries() {
  const { photos, setPhotos } = useContext(PhotoContext);

  const handleDelete = (indexToDelete) => {
    setPhotos(photos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="galleryContainer">
      <ul className="gallery">
        {photos.length === 0 && "No Photos Uploaded"}
        {photos.map((photo, index) => (
          <li key={index}>
            <img src={photo.imageURL} alt={photo.name} style={{ maxWidth: '500px' }} />
            <button className="delete-btn" onClick={() => handleDelete(index)}>
                Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Galleries;
