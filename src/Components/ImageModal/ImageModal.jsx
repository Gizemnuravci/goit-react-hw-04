import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {

  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen} 
      onRequestClose={onClose} 
      className={s.modal} 
      overlayClassName={s.overlay} 
    >
      <div className={s.container}>
        <img 
          className={s.image} 
          src={image.urls.regular} 
          alt={image.alt_description} 
        />
        <div className={s.info}>
          <p> {image.user.name}</p>
          <p> {image.likes} likes</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;