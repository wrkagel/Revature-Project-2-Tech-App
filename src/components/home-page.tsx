import { useEffect, useState } from "react";
import Employee from "../models/employee";
import EmployeeRoutes from "../routes/employee-routes";
import CreateEmployeeForm from "./create-employee-form";
import EmployeeLineItem from "./employee-line-item";


export default function HomePage() {

    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(()=> {
        (async () => {
            const response = await EmployeeRoutes.getEmployees();
            if(response && response.status === 200) {
                setEmployees(response.data);
            }
        })();
    },[])



    return (<>
        <CreateEmployeeForm />
        <table>
            <thead>
                <tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Manager</th></tr>
            </thead>
            <tbody>
                {employees.map(e => <EmployeeLineItem key={e.id} {...e}/>)}
            </tbody>
        </table>
    </>)
}