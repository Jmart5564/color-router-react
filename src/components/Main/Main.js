import RGB from '../RGB/RGB';
import NavLinks from '../NavLinks/NavLinks';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import './Main.css';

function Main() {
  return (
    <div className='main'>
      <Switch>
        <Route exact path="/">
          <Redirect to="/rgb/34/139/34" />
        </Route>
        <Route exact path="/rgb/:r/:g/:b">
          <NavLinks />
          <RGB />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
  
}
  
export default Main;