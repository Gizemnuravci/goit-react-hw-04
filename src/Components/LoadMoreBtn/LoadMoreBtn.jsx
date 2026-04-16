import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onclick }) => {
  return (
    <div className={s.container}>
      <button className={s.button} type="button" onClick={onclick}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;