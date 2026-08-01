import './button-styles.css';

const ButtonComponent = ({ onClick, variant, children }) => {
  return (
    <button className={variant} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
