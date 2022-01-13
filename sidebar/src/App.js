import "./App.css";
import Sidebar from "./components/Sidebar";
import { Route, Redirect } from "react-router-dom";
import Contacts from "./components/Contacts";
import Documents from "./components/Documents";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Statistics from "./components/Statistics";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Route path="/contacts" component={Contacts} />
      <Route path="/documents" component={Documents} />
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/team" component={Team} />
      <Redirect to="/" />
    </div>
  );
}

export default App;
