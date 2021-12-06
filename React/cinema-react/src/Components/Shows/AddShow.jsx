import React, { useEffect, useState } from "react";
import MoviesService from "../../Services/MoviesService";
import AuditoriumsService from "../../Services/AuditoriumsService";
import { useNavigate } from "react-router";
import ShowsService from "../../Services/ShowsService";

export default function AddShow() {
    const [auditoriums, setAuditoriums] = useState([]);
    const [movies, setMovies] = useState([]);
    const [date, setDate] = useState(new Date());
    const [movieId, setMovieId] = useState("");
    const [auditoriumId, setAuditoriumId] = useState("");
    const navigate = useNavigate();

    useEffect(function effectFunction() {
        async function fetchData() {
            const moviesService = new MoviesService();
            const auditoriumsService = new AuditoriumsService();

            let fetchedMovies = await moviesService.getMovies();
            setMovies(fetchedMovies);

            let fetchedAuditoriums = await auditoriumsService.getAuditoriums();
            setAuditoriums(fetchedAuditoriums);
        }

        fetchData();

    }, [setMovies, setAuditoriums]);

    async function createShow() {
        const showsService = new ShowsService();
        await showsService.createShow(date, movieId, auditoriumId);
        navigate("/shows");
    }

    return (
        <div className="container">
            {auditoriums.length === 0 ? (
                <div className="row mt-4 mb-4">
                    <div className="col">
                        <h1 className="display-4 text-center">😭 Nie można dodać filmu 😭</h1>
                        <h2 className="display-5 text-center">Nie udało się załadować list sal.</h2>
                    </div>
                </div>
            ) : movies.length === 0 ? (
                <div className="row mt-4 mb-4">
                    <div className="col">
                        <h1 className="display-4 text-center">😭 Nie można dodać filmu 😭</h1>
                        <h2 className="display-5 text-center">Nie udało się załadować listy filmów.</h2>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="row mt-4 mb-4">
                        <div className="col">
                            <h1 className="h1 display-4 text-center">Dodaj seans</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <div className="container border rounded">
                                <div className="row justify-content-center mt-3 mb-3">
                                    <div className="col form-group">
                                        <label htmlFor="exampleFormControlSelect1">Film</label>
                                        <select className="form-control" id="exampleFormControlSelect1" onChange={e => setMovieId(e.target.value)}>
                                            {movies.map((movie, key) => {
                                                return (
                                                    <option key={key} value={movie.id}>{movie.title} (Czas trwania: {movie.durationHours}:{movie.durationMinutes})</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="row justify-content-center mb-3">
                                    <div className="col form-group">
                                        <label htmlFor="date">Data</label>
                                        <input type="datetime-local" className="form-control" id="date" onChange={e => setDate(e.target.value)} />
                                    </div>
                                    <div className="col form-group">
                                        <label htmlFor="exampleFormControlSelect1">Numer sali:</label>
                                        <select className="form-control" id="exampleFormControlSelect1" onChange={e => setAuditoriumId(e.target.value)}>
                                            {auditoriums.map((auditorium, key) => {
                                                return (
                                                    <option key={key} value={auditorium.id}>{auditorium.number}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="row justify-content-center mb-3">
                                    <div className="col text-center">
                                        <button className="btn btn-outline-secondary" onClick={e => createShow()}>Dodaj</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}