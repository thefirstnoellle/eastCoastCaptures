import { useContext } from "react";
import { PhotoContext } from "./PhotoContext";

export const Manage = () => {
  const { photos, setPhotos } = useContext(PhotoContext);
  return (
    <div>
      <p>there are {photos.length} photo(s)</p>
      <button
        onClick={() =>
          setPhotos([
            ...photos,
            `https://picsum.photos/seed/${Math.random()}/200/300`,
          ])
        }
      >
        add random photo
      </button>
    </div>
  );
};