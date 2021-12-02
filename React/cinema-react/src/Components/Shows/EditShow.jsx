import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import MoviesService from "../../Services/MoviesService";
import AuditoriumsService from "../../Services/AuditoriumsService";
import { useNavigate, useParams } from "react-router";
import ShowsService from "../../Services/ShowsService";

export default function EditShow() {
    const [auditoriums, setAuditoriums] = useState([]);
    const [movies, setMovies] = useState([]);
    const [date, setDate] = useState(new Date());
    const [movieId, setMovieId] = useState("");
    const [auditoriumId, setAuditoriumId] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(function effectFunction() {
        async function fetchData() {
            const moviesService = new MoviesService();
            const auditoriumsService = new AuditoriumsService();
            const showsService = new ShowsService();

            let fetchedShow = await showsService.getShowById(id);
            setMovieId(fetchedShow.movie.id);
            setAuditoriumId(fetchedShow.auditorium.id);
            setDate(new Date(fetchedShow.date));

            let fetchedMovies = await moviesService.getMovies();
            setMovies(fetchedMovies);

            let fetchedAuditoriums = await auditoriumsService.getAuditoriums();
            setAuditoriums(fetchedAuditoriums);
        }

        fetchData();

    }, [setMovies, setAuditoriums, id]);

    async function editShow() {
        const showsService = new ShowsService();
        await showsService.editShow(id, date, movieId, auditoriumId);
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
                            <h1 className="h1 display-4 text-center">Edytuj seans</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <div className="container border rounded">
                                <div className="row justify-content-center mt-3 mb-3">
                                    <div className="col form-group">
                                        <label htmlFor="movieSelect">Film</label>
                                        <select className="form-control" id="movieSelect" onChange={e => setMovieId(e.target.value)}>
                                            {movies.map((movie, key) => {
                                                if (movie.id === movieId) {
                                                    return (
                                                        <option selected key={key} value={movie.id}>{movie.title} (Czas trwania: {movie.durationHours}:{movie.durationMinutes})</option>
                                                    )
                                                }

                                                else {
                                                    return (
                                                        <option key={key} value={movie.id}>{movie.title} (Czas trwania: {movie.durationHours}:{movie.durationMinutes})</option>
                                                    )
                                                }
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="row justify-content-center mb-3">
                                    <div className="col form-group">
                                        <label htmlFor="date">Data</label>
                                        <input type="datetime-local" className="form-control" id="date" defaultValue={date} onChange={e => setDate(e.target.value)} required/>
                                    </div>
                                    <div className="col form-group">
                                        <label htmlFor="auditoriumSelect">Numer sali:</label>
                                        <select className="form-control" id="auditoriumSelect" onChange={e => setAuditoriumId(e.target.value)}>
                                            {auditoriums.map((auditorium, key) => {
                                                if (auditorium.id === auditoriumId) {
                                                    return (
                                                        <option selected key={key} value={auditorium.id}>{auditorium.number}</option>
                                                    )
                                                }

                                                else {
                                                    return (
                                                        <option key={key} value={auditorium.id}>{auditorium.number}</option>
                                                    )
                                                }
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="row justify-content-center mb-3">
                                    <div className="col text-center">
                                        <button className="btn btn-outline-secondary" onClick={e => editShow()}>Zatwierdź zmiany</button>
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