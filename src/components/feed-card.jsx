import './feed-card-style.css';

const FeedCard = ({ 
  userName, 
  logText, 
  timeAgo, 
  achievementText, 
  stats = {} // { activeTime, distance, calories }
}) => {
  return (
    <div className="feed-card">
      <div className="feed-header">
        <div className="feed-details">
          <div className="avatar"> </div>
          <p>
              {userName} {logText}
          </p>
        </div>
        <p className="small-body">{timeAgo}</p>
      </div>

      {achievementText && ( // Om achievementText finns visas detta
        <div className="achievement-container">
          <p className="small-body">
              {achievementText}
          </p>
        </div>
      )}

      <div className="feed-stats-container">
        {stats.activeTime && ( // Om activeTime finns visas detta
          <div className="feed-stat-item">
            <p className="small-body">Aktiv tid</p>
            <p>{stats.activeTime}</p>
          </div>
        )}
        {stats.distance && ( // Om distance finns visas detta
          <div className="feed-stat-item">
            <p className="small-body">Distans</p>
            <p>{stats.distance}</p>
          </div>
        )}
        {stats.calories && ( // Om calories finns visas detta
          <div className="feed-stat-item">
            <p className="small-body">Kalorier</p>
            <p>{stats.calories}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedCard;