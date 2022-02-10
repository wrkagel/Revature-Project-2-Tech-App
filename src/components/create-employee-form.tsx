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

    return (<div>
        <input type={"text"} placeholder={'First Name'} ref={fnameInput}/>
        <input type={"text"} placeholder={'Last Name'} ref={lnameInput}/>
        <input type={"text"} placeholder={'username'} ref={usernameInput}/>
        <input type={"password"} placeholder={'password'} ref={passwordInput}/>
        <input type={"checkbox"} id="isManager" placeholder={'First Name'} ref={isManagerInput}/>
        <label htmlFor="isManager">Is Manager</label>
        <button onClick={()=> setCreate({...create})}>Create New Employee</button>
    </div>)
}