import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Activity, User, Users, Plus } from 'lucide-react';
import './navigation-style.css';

const BottomNavigation = () => {
  const navItems = [
    { path: "/", icon: Home, label: "Hem" },
    { path: "/stats", icon: Activity, label: "Statistik" },
    { path: "/log", icon: Plus, iconClassName: "plus-icon"},
    { path: "/social", icon: Users, label: "Social" },
    { path: "/profile", icon: User, label: "Profil" },
  ]; // Array med alla navItems och länkar till respektive sida

  return (
    <nav>
      {navItems.map((item) => ( // Mappar navItems
        <NavLink
          key={item.path}
          to={item.path}
          className="nav-item"
        >
          {({ isActive }) => ( // Använder isActive för att kolla om den är aktiv
            <div className="nav-item-content">
              {item.iconClassName === "plus-icon" ? (
                <div className="plus-icon-container">
                  <item.icon
                    className="nav-icon"
                  />
                </div>
              ) : (
                <item.icon
                  className={`nav-icon ${item.iconClassName || ''}`} // Sätter iconClassName om det finns
                  color={isActive ? "var(--blue500)" : "var(--not-selected)"} // Sätter färg beroende på om den är aktiv eller inte
                />
              )}
              {item.label && ( // Visar label om det finns
                <p className={`nav-label ${isActive ? 'nav-label-active' : 'nav-label-inactive'} small-body`}>
                  {item.label}
                </p>
              )}
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavigation;
