import React from "react";
import { useNavigate, useParams } from "react-router";
import ShowsService from "../../Services/ShowsService";

export default function DeleteShow() {
    const { id } = useParams();
    const navigate = useNavigate();

    async function deleteShow() {
        const showsService = new ShowsService();
        await showsService.deleteShow(id);
        navigate("/shows");
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="container border rounded mt-4">
                        <div className="row mt-4 mb-4">
                            <div className="col">
                                <h1 className="text-center display-4">Czy na pewno chcesz usunąć wybrany seans?</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-10">
                                <div className="container">
                                    <div className="input-group">
                                        <div className="col text-center">
                                            <button className="btn btn-lg btn-outline-secondary" onClick={() => deleteShow()}>Tak</button>
                                        </div>
                                        <div className="col text-center">
                                            <button className="btn btn-lg btn-outline-secondary" onClick={() => navigate("/shows")}>Nie</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}