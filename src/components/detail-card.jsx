import './detail-card-style.css';

const DetailCard = ({ emoji, title, date }) => {
  return (
    <div className="detail-card">
      <div className="detail-emoji">{emoji}</div>
      <div className="detail-info">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default DetailCard;
