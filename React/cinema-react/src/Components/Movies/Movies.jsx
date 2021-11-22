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
                                    <th className="text-center">Tytuł</th>
                                    <th className="text-center">Czas trwania</th>
                                    <th className="text-center">Zarządzanie</th>
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
                        TDO: Komponent do dodawania
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies;