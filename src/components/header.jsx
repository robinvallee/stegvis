import './header-style.css';
import { ArrowLeft } from 'lucide-react';
import FunctionButton from './function-button';

const Header = ({ title, subtitle, onBack, icon, buttonText, buttonIcon }) => {
  return (
    <header>
      <div className="header-content">
        <div className="header-left-content">
          {onBack && ( // Om det finns en onBack så visas en tillbaka-knapp
          <button className="header-back-button" onClick={onBack}>
            <ArrowLeft size={24} strokeWidth="1.67" color="var(--gray900)" />
          </button>
        )}
        <div className="header-text-container">
          <div className="header-title-row">
            {/* Om det finns en ikon visas ikonen före rubriken */}
            {icon && <p className="header-icon">{icon}</p>} 
            <h1>{title}</h1>
          </div>
          {subtitle && <p>{subtitle}</p>}
        </div>
        </div>
        {buttonText && ( // Om det finns en buttonText så visas knappen
          <div className="header-right-action">
            <FunctionButton 
              text={buttonText} 
              icon={buttonIcon} 
            />
          </div>
        )}
      </div>
    </header>
  );
};

Header.Action = FunctionButton;

export default Header;