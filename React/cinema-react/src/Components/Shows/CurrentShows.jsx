import React, { useEffect, useState } from "react";
import Show from "./Show";
import ShowsService from "../../Services/ShowsService";

export default function CurrentShows() {
    const [currentShows, setCurrentShows] = useState([]);

    useEffect(function effectFunction() {
        async function fetchShows() {
            let fetchedShows = [];

            const showsService = new ShowsService();

            fetchedShows = await showsService.getCurrentShows();

            if (fetchedShows.length > 0) {
                setCurrentShows(fetchedShows);
            }
        }

        fetchShows();
    }, [setCurrentShows]);

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col">
                    <h1 className="display-4 text-center">Lista atualnie granych seansów</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {currentShows.length > 0 ? (
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">Data</th>
                                    <th className="text-center">Film</th>
                                    <th className="text-center">Sala</th>
                                    <th className="text-center">Sprzedanych</th>
                                    <th className="text-center">Dostępnych</th>
                                    <th className="text-center col-1">Zarządzanie</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentShows.map((show, key) => {
                                        return (
                                            <Show
                                                key={key}
                                                id={show.id}
                                                date={show.date}
                                                movie={show.movie}
                                                auditorium={show.auditorium}
                                                soldTickets={show.soldTickets}
                                                availableTickets={show.availableTickets}
                                            />
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    ) : (
                        < h2 className="text-center">😭 Brak aktualnie trwających seansów 😭</h2>
                    )}
                </div>
            </div >
        </div >
    )
}