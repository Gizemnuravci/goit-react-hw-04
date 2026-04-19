import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "./services/unsplash-api";

import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

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

        if (!data?.results || data.results.length === 0) {
          toast.error("Görsel bulunamadı!");
          return;
        }

        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        setIsError(true);
        toast.error("Bir hata oluştu!");
        console.log(error);
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
    setIsError(false);
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
