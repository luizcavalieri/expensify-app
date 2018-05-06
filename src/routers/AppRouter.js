import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/header';
import AddExpensePage from '../components/add-expense';
import EditExpensePage from '../components/edit-expense';
import HelpPage from '../components/help';
import NotFoundPage from '../components/not-found-page';
import DashboardPage from '../components/dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;