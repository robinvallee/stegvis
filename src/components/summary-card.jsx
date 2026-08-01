import { Clock, MapPin, Flame, Smile } from 'lucide-react';
import './summary-card-style.css';

const SummaryCard = ({ time, distance, calories, feeling = "Enkelt" }) => {
  return (
    <div className="summary-card">
      <div className="summary-row">
        <div className="summary-item">
          <Clock className="icon-aktiv-tid" size={24} />
          <p>Aktiv tid</p>
        </div>
        <p className="body-statistik">{time}</p>
      </div>
      <div className="divider"></div>
      
      {distance && ( // Om distance finns visas detta input-fältet
        <>
          <div className="summary-row">
            <div className="summary-item">
              <MapPin className="icon-distans" size={24} />
              <p>Distans</p>
            </div>
            <p className="body-statistik">{distance}</p>
          </div>
          <div className="divider"></div>
        </>
      )}

      <div className="summary-row">
        <div className="summary-item">
          <Flame className="icon-aktiv-energi" size={24} />
          <p>Aktiv energi</p>
        </div>
        <p className="body-statistik">{calories}</p>
      </div>
      <div className="divider"></div>

      <div className="summary-row">
        <div className="summary-item">
          <Smile className="icon-feeling" size={24} />
          <p>Reflektion</p>
        </div>
        <p className="body-statistik">{feeling}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
