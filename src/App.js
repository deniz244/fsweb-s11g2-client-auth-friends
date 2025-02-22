import { Link, Switch, Route } from "react-router-dom";

import { useState } from "react";

import "./App.css";
import LoginForm from "./comps/LoginForm";
import FriendsList from "./comps/FriendsList";
import AddFriend from "./comps/AddFriend";
import Logout from "./comps/Logout";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <nav className="flex gap-2 justify-center text-lg text-black">
        <h1 className="text-black">FRIENDS DATABASE</h1>
        <Link to="/login" className="p-2 ">
          LOGIN.
        </Link>
        <Link to="/friends" className="p-2 ">
          FRIENDLIST.
        </Link>
        <Link to="/friends/add" className="p-2 ">
          ADDFRIEND.
        </Link>
        <Link to="/logout" className="p-2 ">
          LOGOUT
        </Link>
      </nav>

      <div className="max-w-sm mx-auto">
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route exact path="/">
            ANASAYFA
          </Route>
          <Route path="/friends/add">
            <AddFriend />
          </Route>
          <Route path="/friends">
            <FriendsList />
          </Route>

          {/*<Route path="/content" component={ContentList} />*/}

          {/*<PrivateRoute path="/content" component={ContentList} />*/}
        </Switch>
      </div>
    </div>
  );
}

export default App;
