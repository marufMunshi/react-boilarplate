import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage'

const AppRouter = () => (
    <BrowserRouter>
        <div className="wrapper">
            <main>
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    {/* <Route path="/project/:id" component={Project} /> */}
                </Switch>
            </main>
        </div>
    </BrowserRouter>
)

export default AppRouter;