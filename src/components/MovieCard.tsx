import type { Movie } from '../api/movieService';
import { HeartIcon, StarIcon, PlusIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

interface MovieCardProps {
    movie: Movie;
    onLike: (movieId: number) => void;
}


export const MovieCard: React.FC<MovieCardProps> = ({ movie, onLike }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked((prev) => !prev);
        onLike(movie.id);
    };

    // Example genres, replace with real genres if available
    // If you have a genres array or genre_ids, map them to names here
    const genres: string[] = Array.isArray((movie as any).genres)
      ? ((movie as any).genres as string[])
      : [];

    return (
        <Card
            className="movie-card relative group overflow-hidden rounded-2xl bg-white/5 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl focus-within:ring-2 ring-purple-400 p-0"
            tabIndex={0}
            aria-label={`Movie card: ${movie.title}`}
            role="article"
            aria-labelledby={`movie-title-${movie.id}`}
        >
            {/* Overlay for hover/focus */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 group-hover:bg-black/40 group-focus:bg-black/40 transition-all duration-300"></div>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                {/* Title and year */}
                <h3 id={`movie-title-${movie.id}`} className="text-xl font-bold text-white mb-1 drop-shadow-lg">{movie.title}</h3>
                <div className="flex justify-between items-center text-purple-100 mb-1">
                    <span className="text-sm">{new Date(movie.release_date).getFullYear()}</span>
                    <div className="flex items-center space-x-1">
                        <StarIcon className="w-4 h-4 text-yellow-400" />
                        <span>{movie.vote_average.toFixed(1)}</span>
                    </div>
                </div>
                {/* Render genres */}
                <div className="flex flex-wrap gap-2 mb-2">
                    {genres.map((genre, idx) => (
                        <span key={idx} className="bg-purple-700/60 text-xs text-white px-2 py-0.5 rounded select-none">
                            {genre}
                        </span>
                    ))}
                </div>
                {/* Movie overview/description */}
                {movie.overview && (
                    <p className="text-white/80 text-xs mb-3 line-clamp-3 min-h-[2.5em]">{movie.overview}</p>
                )}
                {/* Like button */}
                <Button
                    onClick={handleLikeClick}
                    variant={isLiked ? "danger" : "ghost"}
                    size="sm"
                    className={`absolute top-2 right-2 p-2 rounded-full min-w-0 min-h-0 shadow-none ${isLiked ? 'bg-rose-500/90' : 'bg-white/10'} ${isLiked ? 'hover:bg-rose-400' : 'hover:bg-white/20'} backdrop-blur-sm`}
                    aria-label={isLiked ? 'Unlike' : 'Like'}
                >
                    <HeartIcon className={`w-6 h-6 ${isLiked ? 'text-white' : 'text-white/80'}`} />
                </Button>
                {/* Add to Favorites button */}
                <Button
                    variant="solid"
                    size="md"
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transform hover:scale-[1.02] transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    aria-label="Add to Favorites"
                >
                    <PlusIcon className="w-5 h-5" /> Add to Favorites
                </Button>
            </div>
        </Card>
    );
};