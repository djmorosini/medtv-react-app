import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import Homepage from './Homepage';
import FullListPage from './FullListPage';
import VideoWatchPage from './VideoWatchPage'

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route name='home' exact path='/' component={Homepage}/>
      <Route name='watch-page' exact path='/video/:id' component={VideoWatchPage}/>
      <Route name='list-page' path='/videos' component={FullListPage}/>
    </Switch>
  </BrowserRouter>
)

export default Main