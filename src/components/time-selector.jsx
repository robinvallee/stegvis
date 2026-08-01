import './time-selector-style.css';

const TimeSelector = ({ options, activeOption, onOptionChange }) => {
  return (
    <div className="time-selector">
      {options.map((option) => ( // Mappar valbara tidsperioder 
        <button 
          key={option} // Sätter en unik id på varje tidsperiod
          className={`time-selector-option ${activeOption === option ? 'active' : ''}`} // Sätter en aktiv klass om vald tidsperiod är aktiverad
          onClick={() => onOptionChange(option)} // Funktion som ska uppdatera aktiva tiden
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;
