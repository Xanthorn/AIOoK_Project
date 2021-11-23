import React, { Component } from "react";

class AddShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: "",
            movie: "",
            room: '',
            quantitysold: '',
            quantityavailable: '',
            occupiedseats: []
        };
    }

    onChange(e) {
        let target = e.target.id;
        this.setState({
            [target]: e.target.value
        });
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <input type="text" className="form-control form-control-lg form" id="date" placeholder="Data seansu" onChange={(e) => this.onChange(e)} />
                        </td>
                        <td>
                            <input type="text" className="form-control form-control-lg form" id="time" placeholder="Godzina rozpoczęcia" onChange={(e) => this.onChange(e)} />
                        </td>
                        <td>
                            <input type="text" className="form-control form-control-lg form" id="movie" placeholder="film" onChange={(e) => this.onChange(e)} />
                        </td>
                        <td>
                            <input type="text" className="form-control form-control-lg form" id="room" placeholder="Sala" onChange={(e) => this.onChange(e)} />
                        </td>
                        <td>
                            <input type="text" className="form-control form-control-lg form" id="quantityavailable" placeholder="Dostępne miejsca" onChange={(e) => this.onChange(e)} />
                        </td>
                        <td>
                            <button className="btn btn-lg btn-outline-dark" onClick={() => this.props.addShow(this.state)}>Dodaj seans</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default AddShow;