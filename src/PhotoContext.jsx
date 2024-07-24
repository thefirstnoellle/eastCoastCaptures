import { createContext, useState, useEffect } from "react";

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState(() => {
    const savedPhotos = localStorage.getItem('photos');
    return savedPhotos ? JSON.parse(savedPhotos) : [];
  });

  useEffect(() => {
    localStorage.setItem('photos', JSON.stringify(photos));
  }, [photos]);

  return (
    <PhotoContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
};