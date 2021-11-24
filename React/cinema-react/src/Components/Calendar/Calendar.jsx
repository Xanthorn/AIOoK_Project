import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Calendar.css";

export default function Calendar() {

    const [actualYear, setYear] = useState(0);
    const [actualMonth, setMonth] = useState(0);

    const [daysInMonth, setDaysInMonth] = useState(0);
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);

    useEffect(() => {
        function calculateDays() {
            const date = new Date();

            setYear(date.getFullYear());
            setMonth(date.getMonth() + 1);

            const days = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
            const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

            setDaysInMonth(days);
            setFirstDayOfMonth(firstDay);
        }
        calculateDays();
    }, [setDaysInMonth, setFirstDayOfMonth]);

    function drawCalendar() {
        let month = [];
        let week = [];
        for (let i = 1; i < daysInMonth + firstDayOfMonth; i++) {
            if (i < firstDayOfMonth) {
                week.push(<td className="col-1 text-center"></td>)
            }

            week.push(<td className="col-1 text-center"><Link to={`/calendar/${actualYear}/${actualMonth}/${i}`}><p className="display-5">{i}</p></Link></td>)

            if (i % 7 === 0) {
                month.push(<tr>{week}</tr>)
                week = [];
            }
        }

        if (week.length < 7) {
            const missingDays = 7 - week.length;
            for (let i = 0; i < missingDays; i++) {
                week.push(<td className="col-1 text-center"></td>)
            }
        }

        month.push(<tr>{week}</tr>)

        return month;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-4 text-center">Kalendarz</h1>
                </div>
            </div>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="col-1 text-center">Poniedziałek</th>
                            <th className="col-1 text-center">Wtorek</th>
                            <th className="col-1 text-center">Środa</th>
                            <th className="col-1 text-center">Czwartek</th>
                            <th className="col-1 text-center">Piątek</th>
                            <th className="col-1 text-center">Sobota</th>
                            <th className="col-1 text-center">Niedziela</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drawCalendar()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}