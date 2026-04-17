
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target.elements.query.value.trim();
    if (!val) {
      toast.error("Lütfen bir kelime yazın!");
      return;
    }
    onSubmit(val);
  };
   
  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit} >
        <input className={s.input} name="query" type="text" placeholder="Search images and photos" />
        <button className={s.btn} type="submit">Search</button>
      </form>
    </header>
  );

};

export default SearchBar;