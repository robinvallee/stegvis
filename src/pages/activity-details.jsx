import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import SummaryCard from '../components/summary-card';
import DetailCard from '../components/detail-card';
import ButtonComponent from '../components/button-component';
import StatBox from '../components/stat-box';
import MedalItem from '../components/medal-item';
import { Clock, MapPin, Flame, Smile, Trash2 } from 'lucide-react';

const ActivityDetails = () => {
  const location = useLocation();  // Funktion för att hämta den valda aktiviteten
  const navigate = useNavigate(); // Funktion för att navigera till en annan sida
  const { activity } = location.state || {}; // Hämtar den valda aktiviteten

  return (
    <>
      {/* Header med titel och tillbaka-knapp */}
      <Header 
        title="Senaste aktiviteter" 
        onBack={() => navigate('/')}  // Navigerar till hemsidan
      />
      
      {/* Kort för aktivitet */}
      <DetailCard 
        emoji={activity.emoji} // Aktivitets emoji
        title={activity.title} // Aktivitets titel
        date="Fredag, 31 Oktober" // Aktivitets datum
      />

      {/* Sammanfattning av aktiviteten */}
      <div className="section-container">
        <h2>Sammanfattning</h2>
        <SummaryCard 
          time={activity.time} // Aktivitets tid
          distance={activity.distance} // Aktivitets distans
          calories={activity.calories} // Aktivitets kalorier
          feeling="Enkelt"
        />
      </div>

      {/* Grid med statistik */}
      <div className="section-container">
        <h2>Statistik</h2>
        <div className="stats-grid">
          <StatBox 
            icon={<Clock className="icon-aktiv-tid" size={24} strokeWidth="1.67px" />}
            label="Aktiv tid"
            value="6 min"
            trend="positive"
            badge="+14%"
          />
          <StatBox 
            icon={<MapPin className="icon-distans" size={24} strokeWidth="1.67px" />}
            label="Distans"
            value="0.2 km"
            trend="positive"
            badge="+28%"
          />
          <StatBox 
            icon={<Flame className="icon-aktiv-energi" size={24} strokeWidth="1.67px" />}
            label="Aktiv energi"
            value="5 kcal"
            trend="negative"
            badge="+2%"
          />
          <StatBox 
            icon={<Smile className="icon-feeling" size={24} strokeWidth="1.67px" />}
            label="Reflektion"
            value="Enkelt"
          />
        </div>
      </div>



      {/* Sektion för nya medaljer */}
      <div className="section-container">
        <h2>Nya medaljer</h2>
        <div className="medals-row">
          <MedalItem 
            emoji="👟" 
            title="Morgongångare" 
            date="2025-10-31" 
          />
          <MedalItem 
            emoji="✍️" 
            title="Pro loggare" 
            date="2025-10-31" 
          />
        </div>
      </div>

      {/* Knapp för att ta bort aktivitet */}
      <ButtonComponent variant="delete-button">
        <Trash2 strokeWidth="1.67px" size={24} />
        <p>Ta bort aktivitet</p>
      </ButtonComponent>
    </>
  );
};

export default ActivityDetails;
