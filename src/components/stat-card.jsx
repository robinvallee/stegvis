import './stat-card-style.css';

const StatCard = ({ label, value, icon }) => {
  return (
    <div className="stat-card simple">
      <div className="stat-card-content">
        <p className="stat-label">{label}</p>
        <p className="stat-value">{value}</p>
      </div>
      {icon}
    </div>
  );
};

export default StatCard;