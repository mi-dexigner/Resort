import React from 'react';
import './resort.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Errors from './pages/Errors';
import { Route,Switch } from 'react-router-dom';

import Navigation from './components/Navigation';

const  Resort = ()=> {
// https://www.youtube.com/channel/UCjJHir6dFiHSOe5EayRoSMw/videos
// https://www.youtube.com/watch?v=l0JbuMVXaTs&list=PLnHJACx3NwAe5XQDk9xLgym7FF8Q4FYW7&index=6
  return (
    <>
    <Navigation/>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/rooms/" component={Rooms}></Route>
    <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
    <Route component={Errors} />
    </Switch>
    </>

  )
}

export default Resort;
