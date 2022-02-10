import Employee from "../models/employee";


export default function EmployeeLineItem(props:Employee) {

    const {id, fname, lname, username, isManager} = props;

    return(<tr>
        <td>{id}</td>
        <td>{fname}</td>
        <td>{lname}</td>
        <td>{username}</td>
        <td>{isManager ? "YES" : "NO"}</td>
    </tr>)
}