// Remove test code (lines 3-12)
import React from 'react';

// Rest of the Search component implementation
const person = {
    name: "Bruce Lee",
    age: 36,
    location: "Gotham city"
};

const { name, age, location } = person;

console.log(name);

interface SearchProps {
    searchTerm: string;
    onSearch: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, onSearch }) => {
    return (
        <div className="search-panel p-4 bg-white/10 backdrop-blur-lg rounded-lg">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Search movies..."
            />
        </div>
    );
};

export default Search;