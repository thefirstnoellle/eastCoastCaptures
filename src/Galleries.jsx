import { useContext } from "react";
import { PhotoContext } from "./PhotoContext";

export const Galleries = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div>
      <h2>Gallery</h2>
      <ul>
        {photos.map((photo, index) => (
          <li key={index}>
            <p>Name: {photo.name}</p>
            <img src={photo.imageURL} alt={photo.name} style={{ maxWidth: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};
