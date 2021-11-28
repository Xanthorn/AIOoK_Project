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
        </div>
    )
}