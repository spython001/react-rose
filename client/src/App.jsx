import  { useContext } from "react";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ContextProvider, Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <ContextProvider>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/write">
            {user ? <Write /> : <Register />}
          </Route>
          <Route path="/settings">
            {user ? <Settings /> : <Register />}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
