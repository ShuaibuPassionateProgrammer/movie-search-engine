interface MovieCardProps {
    movie: Movie;
    onLike: (movieId: number) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onLike }) => (
    <div className="movie-card relative group overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-xl hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        
        <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
            <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
            
            <div className="flex justify-between items-center text-purple-100">
                <span className="text-sm">{new Date(movie.release_date).getFullYear()}</span>
                <div className="flex items-center space-x-1">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span>{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>

            <button
                onClick={() => onLike(movie.id)}
                className={`absolute top-2 right-2 p-2 rounded-full backdrop-blur-sm
                    ${isLiked ? 'bg-rose-500/90' : 'bg-white/10'} 
                    transition-all duration-300 hover:scale-110
                    ${isLiked ? 'hover:bg-rose-400' : 'hover:bg-white/20'}
                    ring-0 hover:ring-2 ring-white/30`}
            >
                <HeartIcon className={`w-6 h-6 ${isLiked ? 'text-white' : 'text-white/80'}`} />
            </button>
                className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg
                         transform hover:scale-[1.02] transition-transform duration-200"
            >
                Add to Favorites
            </button>
        </div>
    </div>
);