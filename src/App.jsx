import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "./services/unsplash-api";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);
        
        if (data.results.length === 0) {
          toast.error("Görsel bulunamadı!");
          return;
        }
        
        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />

      {isError && <ErrorMessage />}
      
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={setModalData} />
      )}
      
      {isLoading && <Loader />}
      
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}

      <ImageModal
        isOpen={!!modalData}
        image={modalData}
        onClose={() => setModalData(null)}
      />
    </div>
  );
};

export default App;