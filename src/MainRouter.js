import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import Homepage from './Homepage';
import FullListPage from './FullListPage';
import VideoWatchPage from './VideoWatchPage'

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/video/:id' component={VideoWatchPage}/>
      <Route path='/videos' component={FullListPage}/>
    </Switch>
  </BrowserRouter>
)

export default Main