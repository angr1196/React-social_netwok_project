
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from './../../redux/authReducer';

class HeaderContainer extends React.Component{

  render(){
    return <Header {...this.props} />
  }
}

let mapStateToProps =(state)=>{
  return{
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps,{getAuthUserData, logout})(HeaderContainer);