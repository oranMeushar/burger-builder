import React from 'react';
import { Suspense } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/auth';
const BurgerBuilder = React.lazy(()=>import('./containers/BurgerBuilder/BurgerBuilder'));
const CheckOut  =  React.lazy(()=>import('./containers/CheckOut/Checkout'));
const Orders  =  React.lazy(()=>import('./containers/Orders/Orders'));
const Auth  =  React.lazy(()=>import('./containers/Auth/Auth'));
const Logout = React.lazy(()=>import('./components/LogOut/LogOut'));
const PageNotFound = React.lazy(()=>import('./components/PageNotFound/PageNotFound'));

class App extends React.Component{
  componentDidMount(){
    const token = localStorage.getItem('token');
    if (token){
      this.props.setToken(token);
    }
  }

   
  render() {
    return (
      <div className="App">
        <Layout isAuth = {this.props.isAuth}>
          <Suspense fallback={<div>Loading...</div> }>
            <Switch>
                <Route exact path ='/' component = {BurgerBuilder}/>
                {this.props.isAuth?<Route  path ='/check-out' component = {CheckOut}/>:null}
                {this.props.isAuth?<Route  path ='/orders' component = {Orders}/>:null}
                <Route exact path ='/auth' component = {Auth}/>
                {this.props.isAuth?<Route  path ='/logout' component = {Logout}/>:null}
                <Route path = '*' component = {PageNotFound}/>
              </Switch>
          </Suspense>
        </Layout>
      </div>
    );
  }  
}

const mapStateToProps =(state) =>{
  return{
    isAuth:state.auth.token!==null
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setToken:(token)=>dispatch(actions.setToken(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
