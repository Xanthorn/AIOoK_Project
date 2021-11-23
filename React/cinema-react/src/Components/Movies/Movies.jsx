import Movie from "./Movie";
import React, { Component } from "react";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                { name: 'Diuna', duration: 180 },
                { name: 'Eternals', duration: 155 },
                { name: 'Żużel', duration: 108 },
            ],
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-4 text-center">Lista filmów</h1>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center col-7">Tytuł</th>
                                    <th className="text-center col-5">Czas trwania</th>
                                    <th className="text-center col-1">Zarządzanie</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.movies.map((movie, key) => {
                                        return (
                                            <Movie
                                                key={key}
                                                id={movie.id}
                                                name={movie.name}
                                                duration={movie.duration}
                                            />
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies;