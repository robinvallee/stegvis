import { Minus, Plus, Clock } from 'lucide-react';
import './time-input-card-style.css';

const TimeInputCard = ({ value, onChange }) => {
  const handleIncrement = () => onChange(value + 5); // Funktion som ökar värdet med 5
  const handleDecrement = () => onChange(Math.max(0, value - 5)); // Funktion som minskar värdet med 5

  return (
    <div className="input-card">
      <div className="input-card-header">
        <Clock className="input-card-icon icon-aktiv-tid" size={24} strokeWidth={1.67} />
        <h3>Hur lång tid tog din aktivitet?</h3>
      </div>
      <div className="time-input-controls">

        {/* Knappar för att minska värdet */}
        <button className="control-button" onClick={handleDecrement}> 
          <Minus size={24} strokeWidth={1.67} />
        </button>

        {/* Visa värdet */}
        <div className="time-display">
          <h2>{value}</h2>
          <p>minuter</p>
        </div>
        
        {/* Knappar för att öka värdet */}
        <button className="control-button" onClick={handleIncrement}>
          <Plus size={24} strokeWidth={1.67} />
        </button>
      </div>
    </div>
  );
};

export default TimeInputCard;
