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
        <div className="container">
            <button onClick={() => setHasLiked({ userLike: true })}>Like</button>
            
        </div>
    );
};

export default App;