import { MapPin, Clock, Flame, ChevronRight } from 'lucide-react';
import './activity-card-style.css';

const ActivityCard = ({ emoji, title, time, calories, distance, onClick }) => {
  return (
    <div className="activity-card" onClick={onClick}>
      <div className="activity-card-content">
        <div className="activity-emoji">
          <p>{emoji}</p>
        </div>
        <div className="activity-details">
          <h3>{title}</h3>
          <div className="activity-stats">
            <div className="activity-stat">
              <Clock size={16} className="icon-aktiv-tid" />
              <p>{time}</p>
            </div>
            <div className="activity-stat">
              <Flame size={16} className="icon-aktiv-energi" />
              <p>{calories}</p>
            </div>
            {distance && ( // Visar distans om distance finns
              <div className="activity-stat">
                <MapPin size={16} className="icon-distans" />
                <p>{distance}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <ChevronRight strokeWidth={1.67} size={24} className="icon-gray"/>
    </div>
  );
}

export default ActivityCard;
