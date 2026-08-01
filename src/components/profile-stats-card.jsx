import '../index.css';

const ProfileStatsCard = ({ icon: Icon, value, label, className }) => {
  return (
    <div className="profile-stats-card">
      <div className="profile-stats-icon">
        <Icon className={className} size={24} strokeWidth={1.67}/>
      </div>
      <div className="profile-stats-content">
        <p className="body-statistik">{value}</p>
        <p className="small-body">{label}</p>
      </div>
    </div>
  );
};

export default ProfileStatsCard;
