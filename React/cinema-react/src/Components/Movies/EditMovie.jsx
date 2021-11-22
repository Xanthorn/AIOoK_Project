import React, { Component } from "react";

class EditMovie extends Component {
    constructor(props) {
        super(props);
        let movie = 0;
        let i;
        for (i = 0; i < this.props.movies.length; i++) {
            if (this.props.movies[i].id === this.props.id) {
                movie = this.props.movies[i];
                break;
            }
        }
        this.state = {
            name: movie.name,
            duration: movie.duration,
            index: i
        };
    }

    editMovie() {
        this.props.movies[this.state.index].name = this.state.name;
        this.props.movies[this.state.index].duration = this.state.duration;
    }

    onChange(e) {
        let target = e.target.id;
        this.setState({
            [target]: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h3>Edycja filmu</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control form-control-lg form" id="name" placeholder="Tytuł filmu" value={this.state.name} onChange={(e) => this.onChange(e)} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control form-control-lg form" id="duration" placeholder="Czas trwania" value={this.state.duration} onChange={(e) => this.onChange(e)} />
                    </div>
                    <div className="col">
                        <button className="btn btn-lg btn-outline-dark" onClick={() => this.editMovie()}>Edytuj filmu</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditMovie;