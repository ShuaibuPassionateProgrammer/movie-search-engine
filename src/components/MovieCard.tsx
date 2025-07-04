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
        
    );
};