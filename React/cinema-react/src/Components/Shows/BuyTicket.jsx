import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShowsService from "../../Services/ShowsService";

export default function BuyTicket() {
    const { id } = useParams();
    const [show, setShow] = useState({});
    const [seats, setSeats] = useState([]);
    const [choosenSeats, setChoosenSeats] = useState([]);

    useEffect(function effectFunction() {
        async function fetchData() {
            const showsService = new ShowsService();

            let fetchedShow = await showsService.getShowById(id);

            if (typeof fetchedShow.seats !== 'undefined') {
                setShow(fetchedShow);
                setSeats(fetchedShow.seats);
            }
        }

        fetchData();

    }, [id, setSeats]);

    function drawAuditorium() {
        const rows = show.auditorium.rows;
        const seatsInRow = show.auditorium.seatsInRow;

        let auditoriumPlan = [];
        let numberOfSeat = 1;

        for (let i = 0; i < rows; i++) {
            let row = [];
            
            for(let j = 0; j < seatsInRow; j++) {
                if(show.seats[numberOfSeat - 1].isTaken) {
                    row.push(<td className="table-danger text-center" key={j}>{numberOfSeat}</td>)
                }
                else {
                    row.push(<td className="table-success text-center" key={j} onClick={async () => await seatClicked(i * seatsInRow + j)}>{numberOfSeat}</td>)
                }

                numberOfSeat++;
            }

            auditoriumPlan.push(<tr key={i}>{row}</tr>);
        }

        return auditoriumPlan;
    }

    async function seatClicked(id) {
        let seats = choosenSeats;
        if(seats.includes(id)) {
            let index = seats.indexOf(id);
            if (index > -1) {
                seats.splice(index, 1);
            }
        }
        else {
            seats.push(id);
        }

        setChoosenSeats([...seats]);
    }

    async function buyTickets() {
        const showsService = new ShowsService();
        let seatsIds = [];

        for(let i = 0; i < choosenSeats.length; i++) {
            seatsIds.push(show.seats[choosenSeats[i]].id);
        }

        await showsService.buyTickets(show.id, seatsIds);
        window.location.reload(false);
    }

    return (
        <div className="container">
            <div className="row mt-4 mb-4*">
                <div className="col">
                    <h1 className="display-4 text-center">Kup bilet</h1>
                </div>
            </div>
            { seats.length === 0 ? (
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Nie udało się wczytać seansu</h2>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Wybierz miejsce na planie sali</h2>
                        <h3>Wybrane miejsca:</h3>
                        {choosenSeats.map(item => <p key={item}>{item + 1}</p>)}
                        { choosenSeats.length > 0 ? (
                            <button className="btn btn-outline-secondary mb-4" onClick={async () => await buyTickets()}>Kup bilet(y)</button>
                        ) : (
                            <button className="btn btn-outline-secondary mb-4" disabled>Kup bilet(y)</button>
                        )}
                        <table className="table table-info table-bordered">
                            <tbody>
                                {drawAuditorium()}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}