import './ButtonClose.module.scss';

export function ButtonClose({classCSS}) {
  return (
      <i className={`fas fa-times ${classCSS}`} />
  );
}
export default ButtonClose;
