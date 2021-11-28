import React, { useEffect, useState } from "react";
import Movie from "../Movies/Movie";
import MoviesService from "../../Services/MoviesService";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(function effectFunction() {
        async function fetchMovies() {
            let fetchedMovies = [];

            const moviesService = new MoviesService();

            fetchedMovies = await moviesService.getMovies();

            if (fetchedMovies.length > 0) {
                setMovies(fetchedMovies);
            }
        }

        fetchMovies();

    }, [setMovies]);

    return (
        <div className="container">
            <div className="row pb-4">
                <div className="col">
                    <h1 className="display-4 text-center">Lista filmów</h1>
                </div>
            </div>
            <div className="row">
                {movies.length > 0 ? (
                    <div className="col">
                            <table className="table table-responsive table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">Tytuł</th>
                                    <th className="text-center">Długość</th>
                                    <th className="text-center col-1">Zarządzanie</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((movie, key) => {
                                    return (
                                        <Movie
                                            key={key}
                                            id={movie.id}
                                            title={movie.title}
                                            durationHours={movie.durationHours}
                                            durationMinutes={movie.durationMinutes}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="col">
                        <h2 className="text-center">😭 Brak filmów 😭</h2>
                    </div>
                )}
            </div>
        <div className="row">
            <div className="col">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
             </div>
        </div>
    </div>
    )
}