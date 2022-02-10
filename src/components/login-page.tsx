import { InteractionType } from '@azure/msal-browser';
import { useMsalAuthentication } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import '../css/login-page.css';


export default function LoginPage() {

    const {login, result, error} = useMsalAuthentication(InteractionType.Popup);

    const [click, setClick] = useState<{}>();

    useEffect(() => {
        if(!click) {
            return;
        }
        (async ()=> {

        })()
    },[click]);

    return (<>
        <div className="container">
            <button title='Login' onClick={()=> setClick({...click})}>Click</button>
        </div>
    </>)
}