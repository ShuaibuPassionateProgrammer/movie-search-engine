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

const Search: React.FC<SearchProps> = ({ searchTerm, onSearch }) => (
    <div className="search-panel group relative max-w-2xl mx-auto w-full">
        <svg
            className="absolute left-4 top-3.5 h-5 w-5 text-purple-300 group-focus-within:text-purple-500 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
        
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full... transition-all duration-300"
            placeholder="Search for movies..."
            style={{ 
                boxShadow: searchTerm 
                    ? '0 8px 32px -4px rgba(99 102 241 / 0.4)'
                    : 'none'
            }}
        />
    </div>
);

export default Search;