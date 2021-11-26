import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Show from "../Shows/Show";
import ShowsService from "../../Services/ShowsService";

export default function DayInCalendar() {
    const { year, month, day } = useParams();
    const [shows, setShows] = useState([]);

    useEffect(function effectFunction() {
        async function fetchShows() {
            let fetchedShows = [];

            const showsService = new ShowsService();

            fetchedShows = await showsService.getShowsByDate(Number(year), Number(month), Number(day));

            if (fetchedShows.length > 0) {
                setShows(fetchedShows);
            }
        }

        fetchShows();

    }, [year, month, day, setShows]);

    return (
        <div className="container">
            <div className="row pb-4">
                <div className="col">
                    <h1 className="display-4 text-center">Filmy wyświetlane w dniu {day}.{month}.{year}:</h1>
                </div>
            </div>
            <div className="row">
                {shows.length > 0 ? (
                    <div className="col">
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
                                {shows.map((show, key) => {
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
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="col">
                        <h2 className="text-center">😭 Brak filmów w wybranym dniu 😭</h2>
                    </div>
                )}
            </div>
        </div>
    )
}