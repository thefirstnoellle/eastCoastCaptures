import { useContext } from "react";
import FeaturedImage from "./FeaturedImage";
import { PhotoContext } from "./PhotoContext";

export const Galleries = () => {
  const { photos } = useContext(PhotoContext);
  return (
    <>
      <FeaturedImage images={photos} />
    </>
  );
};