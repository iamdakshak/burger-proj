import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));
const Orders = React.lazy(() => import('./containers/Orders/Orders'));
const Auth = React.lazy(() => import('./containers/Auth/Auth'));

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
        <Switch>
          <Route path='/auth' component={Auth} />            
          <Route path='/' exact component={BurgerBuilder} />
          <Redirect to='/' />
        </Switch>
    );

    if(this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/logout' component={Logout} />
          <Route path='/auth' component={Auth} />
          <Route path='/' exact component={BurgerBuilder} />
          {/*<Route path='/burger-proj' exact component={BurgerBuilder} /> only for when hosted online(remove above Route while hosting online)*/}
          <Redirect to='/' />
        </Switch>
      );
    }
    return (
      <div >
        <Layout>
            {routes}
        </Layout>
      </div>
     );
  }
}

const mapStateToProps = state => {
  return{
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
