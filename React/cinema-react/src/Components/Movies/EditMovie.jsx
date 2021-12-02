import { useParams } from "react-router-dom";
import { useState } from "react";
import MoviesService from "../../Services/MoviesService";
import { useNavigate } from "react-router";

export default function EditMovie() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const navigate = useNavigate();

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
                                <h1 className="text-center display-4">Edytuj film</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <div className="container">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="title" placeholder="movie name" onChange={e => setTitle(e.target.value)} />
                                                <label htmlFor="title">Tytuł filmu</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="hours" className="form-label">Czas trwania</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="hours" id="hours" onChange={e => setHours(e.target.value)} />
                                                <span className="input-group-text">:</span>
                                                <input type="text" className="form-control" placeholder="minutes" id="minutes" onChange={e => setMinutes(e.target.value)} />
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