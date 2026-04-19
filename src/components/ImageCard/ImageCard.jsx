import s from "./ImageCard.module.css";

const ImageCard = ({ data, onClick }) => {
  return (
    <div className={s.card} onClick={onClick}>
      <img className={s.img} src={data.urls.small} alt={data.alt_description} />
    </div>
  );
};

export default ImageCard;
