
interface SearchProps {
    searchTerm: string;
    onSearch: (term: string) => void;
    isLoading?: boolean;
}


import { XMarkIcon } from '@heroicons/react/24/outline';

const Search: React.FC<SearchProps> = ({ searchTerm, onSearch, isLoading }) => {
    return (
        <div className="search-panel group relative max-w-2xl mx-auto w-full">
            {/* Search icon */}
            <svg
                className="absolute left-4 top-3.5 h-5 w-5 text-purple-300 group-focus-within:text-purple-500 transition-colors pointer-events-none"
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

            {/* Input field */}
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/10 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg transition-all duration-300"
                placeholder="Search for movies..."
                style={{
                    boxShadow: searchTerm
                        ? '0 8px 32px -4px rgba(99 102 241 / 0.4)'
                        : 'none',
                }}
                aria-label="Search for movies"
            />

            {/* Clear button */}
            {searchTerm && !isLoading && (
                <button
                    type="button"
                    className="absolute right-12 top-3.5 p-1 rounded-full bg-white/10 hover:bg-white/20 text-purple-200 hover:text-purple-400 transition-colors"
                    onClick={() => onSearch("")}
                    aria-label="Clear search"
                >
                    <XMarkIcon className="w-5 h-5" />
                </button>
            )}

            {/* Loading spinner */}
            {isLoading && (
                <span className="absolute right-12 top-3.5">
                    <svg className="animate-spin h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                </span>
            )}
        </div>
    );
};

export default Search;