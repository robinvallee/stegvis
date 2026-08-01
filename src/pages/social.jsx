import { useState } from 'react';
import Header from '../components/header';
import TabSelector from '../components/tab-selector';
import ChallengeCard from '../components/challenge-card';
import FeedCard from '../components/feed-card';
import FriendCard from '../components/friend-card';
import FunctionButton from '../components/function-button';
import { UserPlus, Swords } from 'lucide-react';
import '../index.css';
import challengeData from '../data/challenge-data.json';
import feedItems from '../data/feed-items.json';
import friendsList from '../data/friends-list.json';

const Social = () => {
  const [activeTab, setActiveTab] = useState("Flöde"); // Sätter den aktiva fliken och default är "Flöde"

  const { groupChallenges: challenges, myChallenges } = challengeData; // Mappar igenom utmaningarna

  return (
    <>

    {/* Header med titel, underrubrik och en knapp för att lägga till vänner */}
    <Header 
        title="Social" 
        subtitle="Följ och peppa varandra" 
        buttonText="Lägg till vänner"
        buttonIcon={<UserPlus size={24} strokeWidth={1.67} />}
    />
      
    {/* Flikar och tidsval */}
    <div className="stats-controls">
      <TabSelector 
        tabs={['Flöde', 'Utmaningar', 'Vänner']} // Mappar flikarna
        activeTab={activeTab} // Sätter den aktiva fliken
        onTabChange={setActiveTab} // Uppdaterar den aktiva fliken
      />
    </div>

    {activeTab === "Utmaningar" && ( // Om activeTab är "Utmaningar" visas detta
      <>
        <div className="section-container">
          <div className="section-header">
            <h2>Grupputmaningar</h2>
            <FunctionButton 
              icon={<Swords size={24} strokeWidth={1.67} />} 
              text="Skapa utmaning" 
              variant="purple" 
            />
          </div>
              
          {challenges.map((challenge) => ( // Mappar utmaningarna
            <ChallengeCard key={challenge.title} {...challenge} />
          ))}
        </div>

        <div className="section-container">
          <h2>Dina utmaningar</h2>
          {myChallenges.map((challenge) => ( // Mappar utmaningarna
            <ChallengeCard key={challenge.title} {...challenge} />
          ))}
        </div>
      </>
    )}

    {activeTab === "Flöde" && ( // Om activeTab är "Flöde" visas detta
      <div className="section-container">
        {feedItems.map((item) => ( // Mappar flödet
          <FeedCard key={item.userName} {...item} />
        ))}
      </div>
    )}

    {activeTab === "Vänner" && ( // Om activeTab är "Vänner" visas detta
      <div className="section-container">
        {friendsList.map((friend) => ( // Mappar vänner
          <FriendCard key={friend.name} {...friend}/>
        ))}
      </div>
    )}
    </>
  );
};

export default Social;
