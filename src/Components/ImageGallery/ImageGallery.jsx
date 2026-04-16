import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => (
  <ul className={s.list}>
    {items.map((item) => (
      <li key={item.id} className={s.item}>
        <ImageCard data={item} onClick={() => onImageClick(item)} />
      </li>
    ))}

  </ul>
);

export default ImageGallery;
  
