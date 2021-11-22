import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Movie(props) {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.duration} min.
            </td>
            <td className="text-end">
                <Link to={"/" + props.id + "/edit"}>TDO:edycja(ikona)</Link> {"  "}
                <Link to={"/" + props.id + "/delete"}>TDO:usuwanie(ikona)</Link> 
            </td>
        </tr>
    )
}

export default Movie;