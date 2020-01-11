import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main/index';
import Footer from '../components/Footer/index';

const Routes = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>
);

export default Routes;
