import {useEffect, useState} from "react";
import './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'

// API Key: 4a373b48

const API_URL="http://www.omdbapi.com?apikey=4a373b48"

const movie = {
Title: "Superman",
Type: "movie",
Year: "1978",
imdbID: "tt0078346"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search); // Search is from the inspect output in Chrome
    }

    const handleSearch = () => {
        searchMovies(searchTerm);
    };

    useEffect(() => {
        searchMovies('superman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={handleSearch}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}


export default App;