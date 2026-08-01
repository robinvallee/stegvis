import { cloneElement, isValidElement } from 'react';
import { ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import './stat-box-style.css';

const StatBox = ({ icon, label, value, trend, badge, variant = 'default', data, activeIndex }) => {
  
  if (variant === 'chart') {
    const chartData = data || []; // Om data finns visas detta grafen
    const active = activeIndex !== undefined ? activeIndex : chartData.length - 1; // Om activeIndex finns visas detta grafen

    // Variant med graf
    return ( 
      <div className="stat-box chart">
        <div className="stat-header">
          <div className="stat-label">
            {icon}
            <p>{label}</p>
          </div>
          <ChevronRight size={20} strokeWidth="1.67" className="icon-gray"/>
        </div>
        
        <div className="stat-chart-container">
          {chartData.map((height, index) => ( // Mappar grafen
            <div 
              key={index} 
              className={`stat-chart-bar ${index === active ? 'active' : ''}`} // Sätter aktiv graf-stil
              style={{ height: `${height * 100}%` }} // Sätter graf-höjden
            >
            </div>
          ))}
        </div>

        <p className="body-statistik">{value}</p>
      </div>
    );
  }

  // Variant för enskild aktivitet 
  return (
    <div className="stat-box default">
      <div className="stat-header">
        <div className="stat-label">
          {icon}
          <p>{label}</p>
        </div>
        <ChevronRight size={20} strokeWidth="1.67" className="icon-gray" />
      </div>
      <div className="stat-container">
        <div className="stat-main">
          <p className="body-statistik">{value}</p>
          {trend === 'positive' && <ChevronUp size={24} strokeWidth="1.67" className="stat-trend positive" />} 
          {trend === 'negative' && <ChevronDown size={24} strokeWidth="1.67" className="stat-trend negative" />} 
        </div>
        {trend && badge && ( // Om trend och badge finns visas detta
          <div className={`stat-badge ${trend}`}>
            <p className="helptext">{badge}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatBox;