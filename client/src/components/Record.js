import { Link } from "react-router-dom";

const Record = (props) => {
    const { firstname, lastname, position, level } = props.record;

    return (
        < tr >
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{position}</td>
            <td>{level}</td>
            <td>
                <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
                <button className="btn btn-link"
                    onClick={() => {
                        props.deleteRecord(props.record._id);
                    }}
                >
                    Delete
                </button>
            </td>
        </tr >
    );
}
export default Record;