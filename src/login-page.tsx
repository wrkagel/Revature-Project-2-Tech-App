import { useRef } from "react"
import './css/login-page.css'


export default function LoginPage() {

    const usernameInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    return (<>
        <div className="container">
            <input type="text" ref={usernameInput}/>
            <input type="password" ref={passwordInput}/>
        </div>
    </>)
}