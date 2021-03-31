import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './page/Home'
import Login from './page/Login'
import NoPermission from './page/result/NoPermission'
import NotFound from './page/result/NotFound'
import { PrivateRoute } from './PrivateRoute'
import React from 'react'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/404" component={NotFound}></Route>
                <Route path="/403" component={NoPermission}></Route>
                <Route path="/" component={Home}></Route>
            </Switch>
        </Router>
    )
}

export default App
