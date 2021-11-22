import React, { Component } from "react";

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            duration: ""
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
                            <input type="text" className="form-control form-control-lg form" id="name" placeholder="Tytuł filmu" onChange={(e) => this.onChange(e)} />
                        </td>
                        <td>
                            <input type="text" className="form-control form-control-lg form" id="duration" placeholder="Czas trwania" onChange={(e) => this.onChange(e)} />
                        </td>
                        <td>
                            <button className="btn btn-lg btn-outline-dark" onClick={() => this.props.addMovie(this.state)}>Dodaj produkt</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default AddMovie;