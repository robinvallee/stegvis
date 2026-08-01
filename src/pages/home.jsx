import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import '../index.css';
import GoalCard from '../components/goal-card';
import ActivityCard from '../components/activity-log-card';
import StatCard from '../components/stat-card';
import { Footprints, MapPin, Clock, Flame, Zap, Goal } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate(); // Funktion för att navigera till en annan sida

  const handleActivityClick = (activity) => {
    navigate('/activity-details', { state: { activity } });
  }; // Går till sida för mer information om den valda aktiviteten

  return (
    <>
      {/* Header med titel och underrubrik */}
      <Header title="God dag Alex!" subtitle="Har du kollat in dagens uppdrag?" /> 

      {/* Kort med daglig statistik */}
      <div className="stats-container">
        <StatCard 
          label="Streak" 
          value="15 dagar"
          icon={
            <Zap className="icon-blue" />
          }
        />
        <StatCard 
          label="Avklarade mål" 
          value="1/5"
          icon={
            <Goal className="icon-blue" />
          }
        />
      </div>

      {/* Kort med dagliga mål */}
      <div className="section-container">
        <h2>Fredag, 31 Oktober</h2> {/* Dagens datum */}

        {/* Grid med dagliga mål */}
        <div className="goals-grid">
          <GoalCard icon={<Footprints className="icon-steg" />} label="Steg" value="1,560/8,000" remaining="6,440 steg kvar" progress="40%"/>
          <GoalCard icon={<MapPin className="icon-distans" />} label="Distans" value="1/6 km" remaining="5 kilometer kvar" progress="20%"/>
          <GoalCard icon={<Clock className="icon-aktiv-tid" />} label="Aktiv tid" value="12/60 min" remaining="48 minuter kvar" progress="50%"/>
          <GoalCard icon={<Flame className="icon-aktiv-energi" />} label="Aktiv energi" value="94/400 kcal" remaining="306 kcal kvar" progress="45%"/>
        </div>
      </div>

      {/* Kort med senaste loggade aktiviteter */}
      <div className="section-container">
        <h2>Senaste aktiviteter</h2>

        {/* Kolumn med senaste loggade aktiviteter */}
        <div className="activity-container">
          <ActivityCard 
            emoji="👟" 
            title="Morgonpromenad" 
            time="47 min" 
            calories="76 kcal" 
            distance="2 km" 
            onClick={() => handleActivityClick({ emoji: "👟", title: "Morgonpromenad", time: "47 min", calories: "76 kcal", distance: "2 km" })} // Går till en sida med mer information om aktiviteten (Ska egentligen importera loggade aktiviteter)
          />
          <ActivityCard 
            emoji="🏋️" 
            title="Gympass" 
            time="1h 24 min" 
            calories="265 kcal"
            onClick={() => handleActivityClick({ emoji: "🏋️", title: "Gympass", time: "1h 24 min", calories: "265 kcal" })} // Går till en sida med mer information om aktiviteten (Ska egentligen importera loggade aktiviteter)
          />
          <ActivityCard 
            emoji="⚽" 
            title="Fotbollsträning" 
            time="1h 7 min" 
            calories="215 kcal"
            onClick={() => handleActivityClick({ emoji: "⚽", title: "Fotbollsträning", time: "1h 7 min", calories: "215 kcal" })} // Går till en sida med mer information om aktiviteten (Ska egentligen importera loggade aktiviteter)
          />
        </div>
      </div>
    </>
  );
};

export default Home;