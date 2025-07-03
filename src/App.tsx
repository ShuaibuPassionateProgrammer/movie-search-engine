import { useState } from "react";
import Search from "./components/Search";
import { Loader } from "./components/Loader";
import { MovieCard } from "./components/MovieCard";
import { searchMovies } from "./api/movieService";
import type { Movie } from "./api/movieService";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import ModeToggler from "./components/ui/ModeToggler";



const App = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');

    const handleSearch = async (term: string) => {
        try {
            setIsLoading(true);
            setError('');
            const results = await searchMovies(term);
            setMovies(results.length ? results : []);
        } catch (err) {
            setError('Failed to search movies. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };
    // Remove unused like state for now

    // Like handler placeholder
    const handleLike = () => {};
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-gray-950 flex flex-col" aria-label="Movie Search App">
            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-purple-700 text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-white">Skip to main content</a>
            <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-7xl flex-1 w-full">
                {/* Header with branding and mode toggler */}
                <header className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-0" aria-label="App header">
                    <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-lg text-center sm:text-left">🎬 Movie Search</span>
                        <span className="text-purple-200 text-base sm:text-lg font-light ml-0 sm:ml-2 text-center sm:text-left">Find your next favorite film</span>
                    </div>
                    <ModeToggler />
                </header>

                <main id="main-content" tabIndex={-1} className="outline-none">
                    <Search onSearch={handleSearch} searchTerm={""} isLoading={isLoading} />

                    {isLoading && (
                        <div className="mt-16 flex justify-center">
                            <Loader />
                        </div>
                    )}

                    {error && (
                        <div className="mt-8 p-4 sm:p-6 bg-red-400/20 backdrop-blur-lg rounded-xl border border-red-400/30 flex items-center space-x-3 sm:space-x-4">
                            <ExclamationTriangleIcon className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                            <span className="text-red-100 text-base sm:text-lg">{error}</span>
                        </div>
                    )}

                    {/* Movie grid or empty state */}
                    {!isLoading && !error && (
                        movies.length > 0 ? (
                            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-12 pb-8 sm:pb-12" role="list" aria-label="Movie results">
                                <AnimatePresence initial={false}>
                                    {movies.map((movie) => (
                                        <motion.div
                                            key={movie.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                            layout
                                            role="listitem"
                                        >
                                            <MovieCard movie={movie} onLike={handleLike} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center mt-16 text-center select-none" aria-live="polite">
                                <svg className="w-16 h-16 text-purple-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <p className="text-lg text-white/80 font-semibold mb-2">No movies found</p>
                                <p className="text-purple-200 text-base">Try searching for a different title.</p>
                            </div>
                        )
                    )}
                </main>

                <footer className="mt-12 sm:mt-16 border-t border-white/10 pt-6 sm:pt-8 text-center">
                    <p className="text-white/60 text-sm sm:text-base">
                        Powered by <a href="https://www.themoviedb.org/" className="hover:text-purple-400 transition-colors underline underline-offset-2">TMDB API</a>
                    </p>
                </footer>
            </div>
        </div>
    );
        </div>
    );
}

export default App;