interface MovieCardProps {
    movie: Movie;
    onLike: (movieId: number) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onLike }) => (
    <div className="movie-card bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all">
        <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title}
            className="rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
        <div className="flex justify-between text-sm">
            <span>{new Date(movie.release_date).getFullYear()}</span>
            <span>★ {movie.vote_average.toFixed(1)}</span>
        </div>
        <button 
            onClick={() => onLike(movie.id)}
            className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg"
        >
            Like
        </button>
    </div>
);