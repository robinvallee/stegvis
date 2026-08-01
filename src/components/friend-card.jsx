import './friend-card-style.css';
import { Zap, Swords } from 'lucide-react';

const FriendCard = ({ 
  name, 
  status, 
  streakCount, 
}) => {
  return (
    <div className="friend-card">
      <div className="friend-details">
        <div className="avatar" />
      <div className="friend-info">
        <div className="friend-name-row">
          <p>{name}</p>
          {streakCount && ( // Om streakCount finns visas detta
            <div className="streak-container">
              <Zap size={16} strokeWidth={1.67} fill="currentColor" />
              <p className="small-body">
                {streakCount}
              </p>
            </div>
          )}
        </div>
        <p className="small-body">{status}</p>
      </div>
      </div>

      {/* Knapp för att utmana vän */}
      <button className="challenge-button">
        <Swords size={24} strokeWidth={1.67}/>
        Utmana
      </button>
    </div>
  );
};

export default FriendCard;
