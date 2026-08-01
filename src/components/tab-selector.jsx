import './tab-selector-style.css';

const TabSelector = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tab-selector">
      {tabs.map((tab) => ( // Mappar flikarna
        <button 
          key={tab} // Sätter en unik id på varje flik
          className={`tab-selector-item ${activeTab === tab ? 'active' : ''}`} // Sätter stil på den aktiva fliken
          onClick={() => onTabChange(tab)} // Funktion som uppdaterar den aktiva fliken
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
