import './record-card-style.css';

const RecordCard = ({ icon, title, date, value }) => {

  return (
    <div className="record-card">
      <div className="record-details-container">
         <p className="record-icon">{icon}</p>
      <div className="record-details">
        <h3>{title}</h3>
        <p className="helptext">{date}</p>
      </div>
      </div>
      <p className="body-statistik">{value}</p>
    </div>
  );
};

export default RecordCard; 
