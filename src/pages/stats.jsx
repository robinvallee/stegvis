import { useState } from 'react';
import Header from '../components/header';
import StatBox from '../components/stat-box';
import TabSelector from '../components/tab-selector';
import TimeSelector from '../components/time-selector';
import WeeklyChart from '../components/weekly-chart';
import RecordCard from '../components/record-card';
import ActivityListItem from '../components/activity-list-item';
import '../components/breakdown-view.css';
import { Pie, PieChart, Cell } from 'recharts';
import { MapPin, Clock, Flame, Footprints } from 'lucide-react';
import '../index.css';
import activityData from '../data/activity-stats.json';
import recordData from '../data/record-data.json';

const Stats = () => {
  const [activeTab, setActiveTab] = useState('Översikt'); // Sätter den aktiva fliken och default är "Översikt"

  const [activeTime, setActiveTime] = useState('Vecka'); // Sätter den aktiva tiden och default är "Vecka"

  return (
    <>

      {/* Header med titel och underrubrik */}
      <Header title="Statistik" subtitle="Analysera dina prestationer och framsteg" />
      
      {/* Flikar och tidsval */}
      <div className="stats-controls">
          <TabSelector 
            tabs={['Översikt', 'Breakdown', 'Rekord']} // Flikar
            activeTab={activeTab} // Den aktiva fliken
            onTabChange={setActiveTab} // Funktion som uppdaterar den aktiva fliken
          />

          <TimeSelector 
            options={['Vecka', 'Månad', 'År']} // Valbara tidsperioder
            activeOption={activeTime} // Den aktiva tiden
            onOptionChange={setActiveTime} // Funktion som uppdaterar den aktiva tiden
          />
      </div>

        {activeTab === 'Översikt' && ( // Om activeTab är "Översikt" visas detta
          <>
            <div className="stats-grid">
              <StatBox 
                variant="chart"
                label="Distans" // Titel på statistik
                value="43 km" // Värdet på statistik
                icon={<MapPin size={24} className="icon-distans" />}
                data={[0.4, 0.6, 0.8, 0.5, 0.7, 0.3, 0.5]} // Användarens dagliga statistik det senaste 7 dagarna
                activeIndex={6} // Index på den aktiva dagen
              />
              <StatBox 
                variant="chart"
                label="Aktiv tid" // Titel på statistik
                value="6h 32 min" // Värdet på statistik
                icon={<Clock size={24} className="icon-aktiv-tid" />}
                data={[0.5, 0.7, 0.6, 0.8, 0.9, 0.4, 0.7]} // Användarens dagliga statistik det senaste 7 dagarna
                activeIndex={6} // Index på den aktiva dagen
              />
              <StatBox 
                variant="chart"
                label="Steg" // Titel på statistik
                value="46,432 steg" // Värdet på statistik
                icon={<Footprints size={24} className="icon-steg" />} 
                data={[0.6, 0.8, 0.9, 0.5, 0.7, 0.4, 0.6]} // Användarens dagliga statistik det senaste 7 dagarna
                activeIndex={6}
              />
              <StatBox 
                variant="chart"
                label="Aktiv energi" // Titel på statistik
                value="1,136 kcal" // Värdet på statistik
                icon={<Flame size={24} className="icon-aktiv-energi" />}
                data={[0.5, 0.7, 0.8, 0.6, 0.9, 0.3, 0.7]} // Användarens dagliga statistik det senaste 7 dagarna
                activeIndex={6} // Index på den aktiva dagen
              />
            </div>

            <div className="section-container">
              <h2>Denna vecka</h2>
              {/* Diagram för sammanfattad statistik per dag denna veckan */}
              <WeeklyChart 
                title="Aktiv tid" 
                totalValue="7h 20min" // Här ska totala tiden denna vecka räknas ut från loggad data
                totalLabel="Genomsnitt"
                icon={<Clock size={24} className="icon-aktiv-tid" />}
                data={[ // Här ska sammanfattade statistiken från denna vecka äknas ut från loggad data
                  { day: "Mån", value: 0.7, color: "var(--green500)" },
                  { day: "Tis", value: 0.4, color: "var(--yellow500)" },
                  { day: "Ons", value: 0.6, color: "var(--green500)" },
                  { day: "Tors", value: 0.2, color: "var(--red500)" },
                  { day: "Fre", value: 0.3, color: "var(--blue500)" },
                  { day: "Lör", value: 0.0, color: "var(--gray200)" },
                  { day: "Sön", value: 0.0, color: "var(--gray200)" },
                ]}
              />
            </div>
          </>
        )}

        {activeTab === 'Breakdown' && ( // Om activeTab är "Breakdown" visas detta
          <div className="section-container">
            <div className="breakdown-card">
              <h3>Aktivitetsfördelning</h3>
              <div className="chart-container">
                {/* Diagram för aktivitetsfördelning */}
                <PieChart width={200} height={200}>
                <Pie 
                  data={activityData} // Data för diagrammet
                  isAnimationActive={false} // Stänger av animationen
                >
                  {activityData.map((entry) => ( // Mappar aktiviteterna
                    <Cell key={entry.name} fill={entry.color} /> // Fyller i diagrammet med rätt färg
                  ))}
                </Pie>
              </PieChart>
              </div>
            </div>
            <div className="activity-list-grid">
              {activityData.map((activity) => ( // Mappar aktiviteterna
                <ActivityListItem 
                  key={activity.name} // Sätter en unik id på varje aktivitet
                  name={activity.name} // Namn på aktiviteten
                  percentage={activity.value} // Procentandel av aktiviteten
                  color={activity.color} // Färg på aktiviteten
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Rekord' && ( // Om activeTab är "Rekord" visas detta
          <div className="section-container">
            {recordData.map((record) => ( // Mappar rekorden
              <RecordCard 
                key={record.title} // Sätter en unik id på varje rekord
                icon={record.icon} // Ikon för rekordet
                title={record.title} // Titel för rekordet
                date={record.date} // Datum för rekordet
                value={record.value} // Värde för rekordet
              />
            ))}
          </div>
        )}
    </>
  );
};

export default Stats;
