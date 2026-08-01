import './breakdown-view.css';

const ActivityListItem = ({ name, percentage, color }) => {
  return (
    <div className="activity-list-item">
      <div className="activity-info">
        <div className="activity-dot" style={{ backgroundColor: color }}></div>
        <p>{name}</p>
      </div>
      <p>{percentage}%</p>
    </div>
  );
};

export default ActivityListItem;
