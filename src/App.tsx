import React, { useState } from "react";

interface TheLike {
    userLike: boolean;
};

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
    const [liked, setHasLiked] = useState<TheLike>({ userLike: false });

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <Search onSearch={handleSearch} />

                {isLoading && (
                    <div className="mt-16">
                        <Loader />
                    </div>
                )}

                {error && (
                    <div className="mt-8 p-6 bg-red-400/20 backdrop-blur-lg rounded-xl
                                border border-red-400/30 flex items-center space-x-4">
                        <ExclamationTriangleIcon className="w-8 h-8 text-red-400" />
                        <span className="text-red-100 text-lg">{error}</span>
                    </div>
                )}

                {!isLoading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                                gap-8 mt-12 pb-12">
                        {movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} onLike={handleLike} />
                        ))}
                    </div>
                )}

                <footer className="mt-16 border-t border-white/10 pt-8 text-center">
                    <p className="text-white/60">
                        Powered by <a href="https://www.themoviedb.org/" 
                        className="hover:text-purple-400 transition-colors">
                            TMDB API
                        </a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default App;