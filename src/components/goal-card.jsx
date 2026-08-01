import './goal-card-style.css';

function GoalCard({ icon, label, value, remaining, progress }) {
  return (
    <div className="goal-card">
      <div className="goal-card-header">
          <div className="goal-icon-container">
            {icon}
          </div>
          <p>{label}</p>
        </div>
        <div className="goal-progress-section">
          <p className="body-statistik">{value}</p>
          <div className="goal-progress-bar-container">
            <div className="goal-progress-bar" style={{ width: progress }} />
            {/* progress blir bredden av elementet */}
          </div>
        </div>
        <p className="small-body">{remaining}</p>
    </div>
  );
}

export default GoalCard;