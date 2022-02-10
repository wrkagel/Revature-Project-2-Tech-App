import { useEffect, useRef, useState } from "react";
import EmployeeRoutes from "../routes/employee-routes";


export default function CreateEmployeeForm() {

    const [create, setCreate] = useState<{}>();

    const fnameInput = useRef<HTMLInputElement>(null);
    const lnameInput = useRef<HTMLInputElement>(null);
    const usernameInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const isManagerInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(!create) {
            return;
        }
        (async () => {
            const employee = {
                fname: fnameInput.current?.value ?? "",
                lname: lnameInput.current?.value ?? "",
                username: usernameInput.current?.value ?? "",
                password: passwordInput.current?.value ?? "",
                isManager: isManagerInput.current?.checked ?? false
            }
            const response = await EmployeeRoutes.createEmployee(employee);
            if(response && response.status === 201) {
                alert('Successfully created new employee.');
            }
        })();
    },[create])

    return (<div className="form-group m-3">
        <input className="form-control w-25" type={"text"} placeholder={'First Name'} ref={fnameInput}/>
        <input className="form-control w-25" type={"text"} placeholder={'Last Name'} ref={lnameInput}/>
        <input className="form-control w-25" type={"text"} placeholder={'username'} ref={usernameInput}/>
        <input className="form-control w-25" type={"password"} placeholder={'password'} ref={passwordInput}/>
        <div className="form-check">
            <label className="form-check-label" htmlFor="isManager">Is Manager</label>
            <input className="form-check-input" type={"checkbox"} id="isManager" placeholder={'First Name'} ref={isManagerInput}/>
        </div>
        <button className="btn lg btn-info mt-3" onClick={()=> setCreate({...create})}>Create New Employee</button>
    </div>)
}