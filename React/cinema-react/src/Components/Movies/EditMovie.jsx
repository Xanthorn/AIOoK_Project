import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MoviesService from "../../Services/MoviesService";
import { useNavigate } from "react-router";

export default function EditMovie() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});

    useEffect(function effectFunction() {
        async function fetchMovie() {
           
            const moviesService = new MoviesService();

            let fetchedMovie = await moviesService.getMovieById(id);

            if (fetchedMovie != null) {
                setMovie(fetchedMovie);
                setHours(fetchedMovie.durationHours);
                setMinutes(fetchedMovie.durationMinutes);
                setTitle(fetchedMovie.title);
            }
        }

        fetchMovie();

    }, [id, setMovie, setHours, setMinutes, setTitle]);

    async function editMovie() {
        const moviesService = new MoviesService();
        await moviesService.editMovie(id, title, hours, minutes);
        navigate("/movies");
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="container border rounded mt-4">
                        <div className="row mt-4 mb-4">
                            <div className="col">
                                <h1 className="text-center display-4">Edytuj film {movie != null ? (movie.title) : (<h2>...</h2>) }</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <div className="container">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="form-floating">
                                                <input type="text" defaultValue={movie != null ? (movie.title) : (" ") } className="form-control" id="title" placeholder="movie name" onChange={e => setTitle(e.target.value)} />
                                                <label htmlFor="title">Tytuł filmu</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="hours" className="form-label">Czas trwania</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" defaultValue={movie != null ? (movie.durationHours) : (0)}  id="hours" onChange={e => setHours(e.target.value)} />
                                                <span className="input-group-text">:</span>
                                                <input type="text" className="form-control" defaultValue={movie != null ? (movie.durationMinutes) : (0)}  id="minutes" onChange={e => setMinutes(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col text-center">
                                            <button className="btn btn-outline-secondary" onClick={() => editMovie()}>Edytuj</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}