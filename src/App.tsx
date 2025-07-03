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
        <div className="container mx-auto px-4 py-8">
            <Search onSearch={handleSearch} />
            
            {isLoading && <Loader />}
            
            {error && (
                <div className="mt-8 p-4 bg-red-500/20 text-red-300 rounded-lg">
                    {error}
                </div>
            )}

            {!isLoading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {movies.map(movie => (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie}
                            onLike={handleLike}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;