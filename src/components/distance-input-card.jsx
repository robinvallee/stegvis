import { MapPin } from 'lucide-react';
import './distance-input-card-style.css';

const DistanceInputCard = ({ value, onChange }) => {
  const quickOptions = [1, 2, 5, 10]; // Array med shortcut-avstånder

  return (
    <div className="input-card">
      <div className="input-card-header">
        <MapPin className="input-card-icon icon-distans" size={24} />
        <h3>Hur långt avstånd?</h3>
      </div>
      <div className="distance-input-container">
        <div className="distance-display">
          <input 
            type="number" 
            className="distance-input"
            value={value}
            onChange={(e) => {
              const val = e.target.value.slice(0, 5);
              onChange(Number(val));
            }} // Ändrar value när man skriver i input
          />
          <p>km</p>
        </div>
        <div className="quick-options">
          {quickOptions.map((opt) => ( // Mappar quickOptions
            <button 
              key={opt} 
              className={`quick-option-chip ${value === opt ? 'active' : ''}`} // Sätter aktiv stil
              onClick={() => onChange(opt)} // Ändrar value när man klickar på knapp
            >
              {opt} km
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistanceInputCard;
