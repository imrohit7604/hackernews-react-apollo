
import { Route, Switch } from 'react-router';
import '../styles/App.css';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from "../components/LinkList"
import Login from "../components/Login"

function App() {
  return (
  
    <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" component={LinkList} />
        <Route
          exact
          path="/create"
          component={CreateLink}
        />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </div>
 
  );
}

export default App;
