import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import Dashboard from './component/Dashboard/Dashboard';

export default function Router() {
 return (
  <HashRouter>
    <div>
    <Header />
      <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/add' component={Form} />
      <Route path='/edit/:id' component={Form} />
      </Switch>
    </div>
  </HashRouter>
  
 )
}