import RGB from '../RGB/RGB';
import NavLinks from '../NavLinks/NavLinks';
import { Route, Switch, Redirect } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/rgb/34/139/34" />
        </Route>
        <Route exact path="/rgb/:r/:g/:b">
          <NavLinks />
          <RGB />
        </Route>
      </Switch>
    </div>
  );
  
}
  
export default Main;