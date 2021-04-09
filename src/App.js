import './App.css';
import { DefaultLayout } from './components/layouts/defaultLayout';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes"

function App() {
  return (
    <div>
      <BrowserRouter>
        <DefaultLayout>
          <Switch>
            {routes.map(route => {
              return(
                <Route path={route.path} exact={route.exact}>
                    <route.component />
                </Route>
              )
            })}
          </Switch>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;