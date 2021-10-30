import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Trek from "./Pages/Trek/Trek";
import AddTrek from "./Pages/AddTrek/AddTrek";
import AppBar from "./Components/AppBar/AppBar";
import Footer from './Components/Footer/Footer'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

//app file
function App() {
    return (
        <div className="app">
            {/* <UnderConstruction /> */}
            <AppBar></AppBar>
            <Router>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/trek/:id" component={Trek} />
                    <Route path="/admin/addTrek" component={AddTrek} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
