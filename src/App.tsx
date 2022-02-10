import { useIsAuthenticated } from '@azure/msal-react';
import HomePage from './components/home-page';
import LoginPage from './components/login-page';

import { MsalProvider } from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";

function App() {

// MSAL configuration
const configuration: Configuration = {
    auth: {
        clientId: "client-id"
    }
};

const pca = new PublicClientApplication(configuration);

  // const isAuthenticated = useIsAuthenticated();
  const isAuthenticated = true;

  return (<>
    <h1>Triple Threat Vacations Technology Specialist Site</h1>
    {isAuthenticated ? <HomePage /> : <LoginPage />}
  </>);
}

export default App;
