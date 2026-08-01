import { Smile } from 'lucide-react';
import './feeling-input-card-style.css';

const FeelingInputCard = ({ selected, onChange }) => {
  const feelings = [
    { label: 'Enkelt', emoji: '😎', id: 'easy' },
    { label: 'Hyfsat', emoji: '😳', id: 'medium' },
    { label: 'Svårt', emoji: '🤯', id: 'hard' },
    { label: 'Jobbigt', emoji: '🥵', id: 'exhausting' },
  ]; // Array med olika känslor

  return (
    <div className="input-card">
      <div className="input-card-header">
        <Smile className="input-card-icon icon-feeling" size={24} />
        <h3>Hur kändes det?</h3>
      </div>
      <div className="feeling-options">
        {feelings.map((feeling) => ( // Mappar feelings
          <button
            key={feeling.id}
            className={`feeling-option ${selected === feeling.id ? 'active' : ''}`}
            onClick={() => onChange(feeling.id)} // Ändrar status
          >
            <div className="feeling-emoji-container">
              <p className="feeling-emoji">{feeling.emoji}</p>
            </div>
            <p className="small-body">{feeling.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeelingInputCard;
