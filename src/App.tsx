import { useIsAuthenticated } from '@azure/msal-react';
import './App.css';
import HomePage from './home-page';
import LoginPage from './login-page';

const isAuthenticated = useIsAuthenticated();

function App() {
  return (<>
    <h1>Triple Threat Vacations Technology Specialist Login</h1>
    {isAuthenticated ? <HomePage /> : <LoginPage />}
  </>);
}

export default App;
