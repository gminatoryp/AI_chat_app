import {useEffect} from "react";
import './App.css'
// import SearchIcon from './search.svg'

// API Key: 4a373b48

const API_URL="http://www.omdbapi.com?apikey=4a373b48"

const movie1 = {
Title: "Superman",
Type: "movie",
Year: "1978",
imdbID: "tt0078346"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        console.log(data.Search) // Search is from the inspect output in Chrome
    }

    useEffect(() => {
        searchMovies('superman')
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                {/* <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {}}
                
                /> */}
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default App;