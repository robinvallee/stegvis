import { ChevronRight, Clock, Flame, MapPin } from 'lucide-react';
import './confirmation-card-style.css';

const ConfirmationCard = ({ icon, title, time, calories, distance, className }) => {
  return (
    <div className={`confirmation-card ${className || ''}`}>
      <div className="confirmation-card-icon">
        {icon}
      </div>

      <div className="confirmation-card-content">
        <h3>{title}</h3>
        <div className="confirmation-card-details">
          <div className="confirmation-detail-item">
            <Clock className="icon-aktiv-tid" size={16} />
            <p>{time} min</p>
          </div>

          <div className="confirmation-detail-item">
            <Flame className="icon-aktiv-energi" size={16} />
            <p>{calories} kcal</p>
          </div>

          {distance && ( // Visar distans om distance finns
            <div className="confirmation-detail-item">
              <MapPin className="icon-distans" size={16} />
              <p>{distance} km</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;