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
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Header with branding and mode toggler */}
                <header className="flex items-center justify-between mb-12">
                    <div className="flex items-center space-x-3">
                        <span className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">🎬 Movie Search</span>
                        <span className="hidden sm:inline text-purple-200 text-lg font-light ml-2">Find your next favorite film</span>
                    </div>
                    <ModeToggler />
                </header>

    <Search onSearch={handleSearch} searchTerm={""} />

                {isLoading && (
                    <div className="mt-16">
                        <Loader />
                    </div>
                )}

                {error && (
                    <div className="mt-8 p-6 bg-red-400/20 backdrop-blur-lg rounded-xl border border-red-400/30 flex items-center space-x-4">
                        <ExclamationTriangleIcon className="w-8 h-8 text-red-400" />
                        <span className="text-red-100 text-lg">{error}</span>
                    </div>
                )}

                {!isLoading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 pb-12">
                        <AnimatePresence initial={false}>
                            {movies.map((movie) => (
                                <motion.div
                                    key={movie.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    layout
                                >
                                    <MovieCard movie={movie} onLike={handleLike} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                <footer className="mt-16 border-t border-white/10 pt-8 text-center">
                    <p className="text-white/60">
                        Powered by <a href="https://www.themoviedb.org/" className="hover:text-purple-400 transition-colors">TMDB API</a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default App;