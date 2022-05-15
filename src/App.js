import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={ LoginPage } />
                    <Route path="/home" component={ HomePage } />
                </Switch>
                
            </div>
        </Router>
    )
}



