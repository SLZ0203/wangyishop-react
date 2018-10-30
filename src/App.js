import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './views/Home/Home'
import Classify from './views/Classify/Classify'
import Recommend from './views/Recommend/Recommend'
import Cart from './views/Cart/Cart'
import Person from './views/Person/Person'
import FooterGuide from './containers/FooterGuide/FooterGuide'

export default class App extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/classify' component={Classify}/>
          <Route path='/recommend' component={Recommend}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/person' component={Person}/>
        </Switch>
        <FooterGuide/>
      </section>
    )
  }
}