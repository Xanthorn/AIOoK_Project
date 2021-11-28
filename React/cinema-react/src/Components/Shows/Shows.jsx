import React, { Component } from "react";
import Show from "./Show";

class Shows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows:
                [
                    { date: "10-11-2021", time: "10:00", movie: "Diuna", room: 2, quantitysold: 1, quantityavailable: 99, occupiedseats: [5] }
                ],
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-4 text-center">Lista seansów</h1>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">Data</th>
                                    <th className="text-center">Godzina</th>
                                    <th className="text-center">Film</th>
                                    <th className="text-center">Sala</th>
                                    <th className="text-center">Sprzedanych</th>
                                    <th className="text-center">Dostępnych</th>
                                    <th className="text-center">Zajęte</th>
                                    <th className="text-center col-1">Zarządzanie</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.shows.map((show, key) => {
                                        return (
                                            <Show
                                                key={key}
                                                id={show.id}
                                                date={show.date}
                                                time={show.time}
                                                movie={show.movie}
                                                room={show.room}
                                                quantitysold={show.quantitysold}
                                                quantityavailable={show.quantityavailable}
                                                occupiedseats={show.occupiedseats}
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}
export default Shows;