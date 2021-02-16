import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Page404 from './404/Page404';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/404" component={Page404} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
