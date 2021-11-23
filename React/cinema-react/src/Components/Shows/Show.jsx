import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Show(props) {
    return (
        <tr>
            <td>
                {props.date}
            </td>
            <td>
                {props.time}
            </td>
            <td>
                {props.movie}
            </td>
            <td>
                {props.room}
            </td>
            <td>
                {props.quantitysold}
            </td>
            <td>
                {props.quantityavailable}
            </td>
            <td>
                {props.occupiedseats[0]}
            </td>
            <td className="text-end">
                <Link to={"/" + props.id + "/edit"}>TDO:edycja(ikona)</Link> {"  "}
            </td>
        </tr>
    )
}

export default Show;