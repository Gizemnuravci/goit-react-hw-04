import s from "./ImageCard.module.css";

const ImageCard = ({ data, onclick }) => {
  return (
    <div className={s.card} onClick={onclick}>
      <img className={s.img} src={data.urls.small} alt={data.alt_description} />

    </div>
  );
};

export default ImageCard;