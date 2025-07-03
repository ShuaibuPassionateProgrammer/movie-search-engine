import React, { useState } from "react";

interface TheLike {
    userLike: boolean;
};

const App = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (term: string) => {
        setIsLoading(true);
        const results = await searchMovies(term);
        setMovies(results);
        setIsLoading(false);
    };
    const [liked, setHasLiked] = useState<TheLike>({ userLike: false });

    return (
        <div className="container">
            <button onClick={() => setHasLiked({ userLike: true })}>Like</button>
            
        </div>
    );
};

export default App;