import './medal-item-style.css';

const MedalItem = ({ emoji, title, date }) => {
  return (
    <div className="medal-item">
      <p className="medal-emoji">{emoji}</p>
      <div className="medal-details">
       <p>{title}</p>
       <p className="helptext">{date}</p>
      </div>
    </div>
  );
};

export default MedalItem;
