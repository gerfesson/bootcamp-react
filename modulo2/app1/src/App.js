import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

const App = () => (
  // eslint-disable-next-line react/jsx-fragments
  <Fragment>
    <GlobalStyle />
    <div className="App" />
  </Fragment>
);

export default App;
