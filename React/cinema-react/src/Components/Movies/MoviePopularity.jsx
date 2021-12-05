import React, { useEffect, useState } from "react";
import MoviesService from "../../Services/MoviesService";

export default function MoviePopularity() {
    const [movies, setMovies] = useState([]);
    const [date, setDate] = useState(new Date());
    const [movieId, setMovieId] = useState("");
    const [popularityData, setPopularityData] = useState({});

    useEffect(function effectFunction() {
        async function fetchData() {
            const moviesService = new MoviesService();

            let fetchedMovies = await moviesService.getMovies();
            setMovies(fetchedMovies);

            if (fetchedMovies.length > 0) {
                setMovieId(fetchedMovies[0])
            }
        }

        fetchData();

    }, [setMovies]);

    async function find() {
        const moviesService = new MoviesService();

        const fetchedPopularityData = await moviesService.getPopularityOfMovieByDate(movieId, date.getFullYear(), date.getMonth + 1, date.getDate());

        setPopularityData(fetchedPopularityData);
    }

    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col">
                    <h1 className="display-4 text-center">Sprawdź popularność filmu</h1>
                </div>
            </div>

            {movies.length === 0 ? (
                <div className="row mb-4">
                    <div className="col">
                        <h2 className="display-5 text-center">😭 Nie udało się załadować listy filmów 😭</h2>
                    </div>
                </div>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="container border rounded">
                            <div className="row mt-3 mb-3">
                                <div className="col-6">
                                    <label htmlFor="movieSelect" className="form-label">Film</label>
                                    <select className="form-control" id="movieSelect" onChange={e => setMovieId(e.target.value)}>
                                        {movies.map((movie, key) => {
                                            return (
                                                <option key={key} value={movie.id}>{movie.title} (Czas trwania: {movie.durationHours}:{movie.durationMinutes})</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="date" className="form-label">Data</label>
                                    <input type="date" className="form-control" id="date" onChange={e => setDate(e.target.value)}/>
                                </div>
                                <div className="col-2 mt-2 text-center">
                                    <button className="btn btn-outline-secondary mt-4" onChange={() => find()}>Sprawdź</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}