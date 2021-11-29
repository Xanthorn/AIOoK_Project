import { useParams } from "react-router-dom";
import MoviesService from "../../Services/MoviesService";
import { useNavigate } from "react-router";

export default function DeleteMovie() {
    const { id } = useParams();
    const navigate = useNavigate();

    async function deleteMovie() {
        const moviesService = new MoviesService();
        await moviesService.deleteMovie(id);
        navigate("/movies");
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="container border rounded mt-4">
                        <div className="row mt-4 mb-4">
                            <div className="col">
                                <h1 className="text-center display-4">Czy na pewno usunąć ten film?</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <div className="container">
                                    <div className="input-group">
                                        <div className="col text-center">
                                            <button className="btn btn-outline-secondary" onClick={() => deleteMovie()}>Tak</button>
                                            <button className="btn btn-outline-secondary" onClick={() => navigate("/movies")}>Nie</button>
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