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
                                    <th className="text-center">Zarządzanie</th>
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
                        TDO: Komponent do dodawania
                    </div>
                </div>
            </div>
        )
    }
}
export default Shows;