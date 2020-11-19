
 import React from "react" ; 
 import {Redirect,Route} from "react-router-dom" ;
 
 const PrivateRoute = ({ component: Component, ...rest }) => ( 
    <Route {...rest} render={props => (
      sessionStorage.getItem("jwt") ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      )
    )}/>
  ); 

  export default PrivateRoute ; 