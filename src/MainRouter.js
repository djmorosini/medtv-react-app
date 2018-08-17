import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
<<<<<<< HEAD
import Homepage from './Homepage';
import FullListPage from './FullListPage';
import VideoWatchPage from './VideoWatchPage';
import MeetOurTeam from './MeetOurTeam';
=======
import Homepage from './Pages/Homepage';
import FullListPage from './Pages/FullListPage';
import VideoWatchPage from './Pages/VideoWatchPage';
import The404Page from './Pages/The404Page';
>>>>>>> be4d4d1112b5d796eba92feec196530e73b9afef

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route name='home' exact path='/' component={Homepage}/>
      <Route name='watch-page' exact path='/video/:id' component={VideoWatchPage}/>
      <Route name='list-page' path='/videos' component={FullListPage}/>
<<<<<<< HEAD
      <Route name='meet-our-team' path='/meet-our-team' component={MeetOurTeam}/>
=======
      <Route name='sorry-404' path='/404' component={The404Page}/>
>>>>>>> be4d4d1112b5d796eba92feec196530e73b9afef
    </Switch>
  </BrowserRouter>
)

export default Main;