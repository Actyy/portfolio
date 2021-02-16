import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './GenericComponents/PrivateRoute/PrivateRoute';
import { AuthProvider } from './GenericComponents/Auth/Auth';
import Home from './Home/Home';
import Page404 from './Page404/Page404';

function App() {
  return (
    <div>
      <ToastContainer />
      <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/404" component={Page404} />
          <Redirect to="/404" />
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
