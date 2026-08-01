import './activity-select-card-style.css';

const ActivitySelectCard = ({ icon, label, onClick }) => {
  return (
    <button className="activity-select-card" onClick={onClick}>
      <div className="activity-select-icon">
        {icon}
      </div>
      <p className="small-body">{label}</p>
    </button>
  );
};

export default ActivitySelectCard;
