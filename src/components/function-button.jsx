import './function-button-style.css';

// Knapp med default satt till "default"
const FunctionButton = ({ icon, text, variant = 'default' }) => {
  return (
    <button className={`function-button ${variant}`}> {/* variant blir en klass */}
      {icon}
      {text}
    </button>
  );
};

export default FunctionButton;
