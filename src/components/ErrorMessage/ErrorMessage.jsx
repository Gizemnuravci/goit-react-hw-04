import s from "./ErrorMessage.module.css";

const ErrorMessage = () => (
  <p className={s.error}>Bir hata oluştu. Lütfen sayfayı yenileyip tekrar deneyin!</p>
);
export default ErrorMessage;