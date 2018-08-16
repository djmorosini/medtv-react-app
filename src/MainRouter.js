import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import Homepage from './Pages/Homepage';
import FullListPage from './Pages/FullListPage';
import VideoWatchPage from './Pages/VideoWatchPage';
import The404Page from './Pages/The404Page';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route name='home' exact path='/' component={Homepage}/>
      <Route name='watch-page' exact path='/video/:id' component={VideoWatchPage}/>
      <Route name='list-page' path='/videos' component={FullListPage}/>
      <Route name='sorry-404' path='/404' component={The404Page}/>
    </Switch>
  </BrowserRouter>
)

export default Main