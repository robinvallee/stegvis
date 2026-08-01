import './weekly-chart-style.css';

const WeeklyChart = ({ title, totalValue, totalLabel, icon, data }) => {
  
  const chartData = data || defaultData; // Sätter default data om inget data finns

  return (
    <>
      <div className="weekly-chart-container">
        <div className="weekly-chart-header">

          {/* Titel och ikon */}
          <div className="weekly-chart-title-group">
            {icon}
            <p>{title}</p>
          </div>

          {/* Totala värde och etikett */}
          <div className="weekly-chart-total">
            <p className="body-statistik">{totalValue}</p>
            <p className="helptext">{totalLabel}</p>
          </div>
        </div>

        <div className="weekly-chart-bars">
          {chartData.map((item) => ( // Mappar data för varje dag
            <div key={item.day} className="weekly-chart-column">
            <div className="weekly-chart-bar-bg">
              <div 
                className="weekly-chart-bar-fill" 
                style={{ 
                  height: `${item.value * 100}%`,
                  backgroundColor: item.color 
                }} // Sätter storlek och färg i diagrammet
              ></div>
            </div>
            <p className="helptext">{item.day}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default WeeklyChart;
