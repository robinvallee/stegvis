import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import BottomNavigation from './components/bottom-navigation';
import Home from './pages/home'; // Importerar Home
import Stats from './pages/stats'; // Importerar Stats
import Log from './pages/log'; // Importerar Log
import Social from './pages/social'; // Importerar Social
import Profile from './pages/profile'; // Importerar Profile
import ActivityDetails from './pages/activity-details'; // Importerar ActivityDetails
import './App.css'; // Importerar App.css

function App() {
  return (
    // Navigering
    <Router>
      <div className="page-content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/log" element={<Log />} />
            <Route path="/social" element={<Social />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/activity-details" element={<ActivityDetails />} />
        </Routes>
      </div>
      <BottomNavigation />
    </Router>
  );
}

export default App;
