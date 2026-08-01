import { CheckCircle } from 'lucide-react';
import ConfirmationCard from './confirmation-card';
import './confirmation-screen-style.css';

const ConfirmationScreen = ({ activity, time, distance, calories = 265 }) => { // Antal kalorier för tillfället
  return (
    <div className="confirmation-screen">
      <div className="confirmation-details">
        <div className="confirmation-icon-container">
          <CheckCircle size={120} strokeWidth={2} /> {/* Bekräftelse icon */}
        </div>
        <h1>Bra jobbat Alex!</h1>
        <p >Din aktivitet har lagts till i din loggbok</p>
      </div>
      <div className="confirmation-card-container">
        <ConfirmationCard 
        icon={activity.icon}
        title={activity.label}
        time={time}
        calories={calories} // I verkliga appen skulle detta beräknas baserat på aktivitet, varaktighet och vikt
        distance={['promenad', 'spring', 'simning', 'cykling'].includes(activity.id) ? distance : null} // Inkluderar distans vid relevenat aktivitet
        />

        {/* Bakgrundskort (Endast för stil) */}
        <ConfirmationCard 
        icon={activity.icon}
        title={activity.label}
        time={time}
        calories={calories} 
        distance={['promenad', 'spring', 'simning', 'cykling'].includes(activity.id) ? distance : null} 
        className="background-card"
        />
        <ConfirmationCard 
        icon={activity.icon}
        title={activity.label}
        time={time}
        calories={calories} 
        distance={['promenad', 'spring', 'simning', 'cykling'].includes(activity.id) ? distance : null} 
        className="background-card-2"
        />
      </div>
    </div>
  );
};

export default ConfirmationScreen;