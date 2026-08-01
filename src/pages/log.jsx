import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import ActivitySelectCard from '../components/activity-select-card';
import TimeInputCard from '../components/time-input-card';
import DistanceInputCard from '../components/distance-input-card';
import FeelingInputCard from '../components/feeling-input-card';
import SearchBar from '../components/search-bar';
import ButtonComponent from '../components/button-component';
import ConfirmationScreen from '../components/confirmation-screen';
import quickActivities from '../data/quick-activities.json';
import activities from '../data/activities.json';

const Log = () => {
  const navigate = useNavigate(); // Funktion för att navigera till en annan sida
  const [selectedActivity, setSelectedActivity] = useState(null); // Sätter vald aktivitet till null
  const [time, setTime] = useState(30); // Sätter standard tid till 30 minuter
  const [distance, setDistance] = useState(1); // Sätter standard distans till 1 km
  const [feeling, setFeeling] = useState(null); // Sätter standard reflektion till null
  const [showConfirmation, setShowConfirmation] = useState(false); // Sätter bekräftelse skärmen till false

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
    setTime(30);
    setDistance(1);
    setFeeling(null);
  }; // När en aktivitet väljs

  const handleBack = () => {
    setSelectedActivity(null);
  }; // När man går tillbaka

  const handleLogActivity = () => {
    setShowConfirmation(true);
    
    setTimeout(() => {
      navigate('/');
    }, 2000); // Navigerar till Hem efter 2 sekunder
  };

  if (showConfirmation) {
    return (
      <ConfirmationScreen 
        activity={selectedActivity}
        time={time}
        distance={distance}
      />
    );
  } // Visar bekräftelseskärm när showConfirmation är true

  if (selectedActivity) {
    return (
      <>
      {/* Header med aktivitet och tillbakaknapp */}
        <Header 
          title={selectedActivity.label} 
          onBack={handleBack}
          icon={selectedActivity.icon}
        /> 

        {/* Loggskärm */}
        <div className="logging-container">
          {/* Tidsinmatning */}
          <TimeInputCard value={time} onChange={setTime} />
          
          {/* Visar distans vid relevant aktiviteten som promenad, spring, simning eller cykling */}
          {['promenad', 'spring', 'simning', 'cykling'].includes(selectedActivity.id) && (
            <DistanceInputCard value={distance} onChange={setDistance} />
          )}
          
          {/* Egen reflektion */}
          <FeelingInputCard selected={feeling} onChange={setFeeling} />
          
          {/* Knapp för att logga aktiviteten */}
          <ButtonComponent onClick={handleLogActivity} variant="primary-button">
            Logga aktivitet
          </ButtonComponent>
        </div>
      </>
    );
  } // Visar sidan för inmatning av data

  return (
    <>

    {/* Header med titel och underrubrik */}
      <Header title="Logga aktivitet" subtitle="Dokumentera din träning och skapa nya vanor" />

      {/* Snabb logg */}
      <div className="section-container">
        <h2>Snabb logg</h2>
        <div className="quick-log-grid">  
          {quickActivities.map((activity) => ( // Mappar snabb logg
            <ActivitySelectCard 
              key={activity.id} // Sätter en unik id på varje aktivitet
              icon={activity.icon} // Sätter icon
              label={activity.label} // Sätter label
              onClick={() => handleActivitySelect(activity)} // När en aktivitet väljs, navigera till sidan för inmatning av data 
            />
          ))}
        </div>
      </div>

      {/* Sök aktivitet */}
      <div className="activity-search-container">

        <div className="section-container">
          <h2>Sök aktivitet</h2>

          {/* Sökfält med en placeholder text */}
          <SearchBar placeholder="Sök aktivitet (ex. Yoga, Tennis)" />
        </div>

        <div className="activity-grid">
          {activities.map((activity) => ( // Mappar aktiviteter
            <ActivitySelectCard 
              key={activity.id} // Sätter en unik id på varje aktivitet
              icon={activity.icon} // Sätter icon
              label={activity.label} // Sätter label
              onClick={() => handleActivitySelect(activity)} // När en aktivitet väljs, navigera till sidan för inmatning av data 
            />
          ))}
        </div>
      </div>
    </>
  ); // Visar sidan där man väljer aktivitet
};

export default Log;
