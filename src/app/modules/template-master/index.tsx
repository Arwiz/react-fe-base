import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams, BrowserRouter
} from "react-router-dom";

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

const DashboardRoutes = () => {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/home`}>
                <Home/>
            </Route>
            <Route path={`${match.path}/about`}>
                <About/>
            </Route>
            <Route path={match.path} exact={true}>
                <h3>Please select a dsfsdf.</h3>
            </Route>
        </Switch>
    )
};

export default DashboardRoutes;
