import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';

export default function LoginPage() {

    const instance = useMsal();    

    const [login, setLogin] = useState<{}>();

    useEffect(() => {
        if(!login) {
            return;
        }
        (async ()=> {
            await instance.instance.loginPopup();
        })()
    },[login, instance.instance]);

    return (<>
        <div className="container">
        <h1>Triple Threat Vacations Technology Specialist Site </h1>
            <button title='Login' onClick={()=> setLogin({...login})}>Login</button>
        </div>
    </>)
}