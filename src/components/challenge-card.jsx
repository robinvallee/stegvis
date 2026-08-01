import './challenge-card-style.css';
import { Trophy } from 'lucide-react';

const ChallengeCard = ({ 
  title, 
  stat, 
  daysLeft, 
  groupProgress, 
  myProgress, 
  tagText
}) => {
  return (
    <div className="challenge-card">
      <div className="challenge-header">
        <div className="challenge-info">
          <h3>{title}</h3>
          <p>{stat}</p>
        </div>
        <div className="days-left-container">
          <p className="small-body">{daysLeft}</p>
        </div>
      </div>

      <div className="progress-section">
        {/* Group Progress */}
        {groupProgress !== undefined && ( // Visar gruppens framsteg om groupProgress finns
          <div className="progress-container">
            <div className="progress-label">
              <p>Gruppens framsteg</p>
              <p className="small-body">{groupProgress}%</p>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: groupProgress }}></div>
            </div>
          </div>
        )}

        {/* My Progress */}
        <div className="progress-container">
          <div className="progress-label">
            <p>Dina framsteg</p>
            <p className="small-body">{myProgress}%</p>
          </div>
          <div className="progress-bar-container">
            {/* progress blir bredden av elementet */}
            <div className="progress-bar" style={{ width: myProgress }}></div>
          </div>
        </div>
      </div>

      
      {tagText && (
        <div className="challenge-tag">
          <Trophy size={16} strokeWidth={1.67} className="challenge-icon"/>
          <p>{tagText}</p>
        </div>
      )}
    </div>
  );
};

export default ChallengeCard;
