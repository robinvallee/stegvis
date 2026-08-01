import './search-bar-style.css';
import { Search } from 'lucide-react';

function SearchBar({ placeholder }) {
  return (
    <div className="search-input-container">
            <Search className="search-icon" size={24} />
            <input 
              type="text" 
              className="search-input" 
              placeholder={placeholder} // Sätter placeholder-texten
            />
          </div>
  );
}

export default SearchBar;