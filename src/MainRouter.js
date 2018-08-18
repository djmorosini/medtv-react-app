import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import MeetOurTeam from './Pages/MeetOurTeam';
import Homepage from './Pages/Homepage';
import FullListPage from './Pages/FullListPage';
import VideoWatchPage from './Pages/VideoWatchPage';
import The404Page from './Pages/The404Page';
import MemberDetails from './Pages/MemberDetails'


const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route name='home' exact path='/' component={Homepage}/>
      <Route name='watch-page' exact path='/video/:id' component={VideoWatchPage}/>
      <Route name='list-page' path='/videos' component={FullListPage}/>
      <Route name='meet-our-team' path='/meet-our-team' component={MeetOurTeam}/>
      <Route name='sorry-404' path='/404' component={The404Page}/>
      <Route name='member-details' path='/meet-our-team/${member.name}' component={MemberDetails}/>
    </Switch>
  </BrowserRouter>
)

export default Main;