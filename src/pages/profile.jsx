import Header from '../components/header';
import '../index.css';
import { Settings, HeartPlus, Goal, Bell, ChevronRight, Clock, Dumbbell, Zap } from 'lucide-react';
import MedalItem from '../components/medal-item';
import ProfileStatsCard from '../components/profile-stats-card';
import '../components/profile-stats-card-style.css';

const user = "Alex Johansson"; // Sätter användarens namn
const profileImg = new URL(`../assets/${user.replace(' ', '_')}_profile_picture.png`, import.meta.url).href; // Sätter användarens profilbild

const Profile = () => {
  return (
    <>

    {/* Header med titel och underrubrik */}
    <Header title="Profil" subtitle="Hantera ditt konto och inställningar" />

    {/* Sektion med användarens profilbild och namn */}
    <div className="profile-container">
      <img src={profileImg} alt={user + "'s profile picture"} />
      <h2>{user}</h2>
    </div>

    {/* Användarens översiktliga statistik */}
    <div className="profile-stats-row">
        <ProfileStatsCard icon={Clock} className="icon-aktiv-tid" value="212 h" label="Total tid" />
        <ProfileStatsCard icon={Dumbbell} className="icon-workouts" value="179" label="Aktiviteter" />
        <ProfileStatsCard icon={Zap} className="icon-streak" value="17 d" label="Bäst streak" />
    </div>

    {/* Inställningar */}
    <div className="settings-container">
        <div className="settings-item">
          <div className="settings-details">
            <Settings className="settings-icon" strokeWidth={1.67} size={24} />
            <p>Kontoinställningar</p>
          </div>
          <ChevronRight strokeWidth={1.67} size={24} className="icon-gray"/>
        </div>

        {/* Linje för all dela upp inställningarna */}
        <div className="divider"></div>

        <div className="settings-item">
          <div className="settings-details">
            <HeartPlus className="settings-icon" strokeWidth={1.67} size={24} />
            <p>Hälsodetaljer</p>
          </div>
          <ChevronRight strokeWidth={1.67} size={24} className="icon-gray"/>
        </div>
        
        {/* Linje för all dela upp inställningarna */}
        <div className="divider"></div>

        <div className="settings-item">
          <div className="settings-details">
            <Goal className="settings-icon" strokeWidth={1.67} size={24} />
            <p>Ändra mål</p>
          </div>
          <ChevronRight strokeWidth={1.67} size={24} className="icon-gray"/>
        </div>

        {/* Linje för all dela upp inställningarna */}
        <div className="divider"></div>

        <div className="settings-item">
          <div className="settings-details">
            <Bell className="settings-icon" strokeWidth={1.67} size={24} />
            <p>Ändra påminnelser</p>
          </div>
          <ChevronRight strokeWidth={1.67} size={24} className="icon-gray"/>
        </div>
    </div>

    {/* Prestationer */}
    <div className="section-container">
      <h2>Prestationer</h2>
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
    </>
  );
};

export default Profile;