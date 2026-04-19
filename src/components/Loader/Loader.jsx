import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => (
  <div className={s.loader}>
    <RotatingLines strokeColor="grey" strokeWidth="5" width="96" visible={true} />
  </div>

  
);

export default Loader;