
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setAuthUserData } from './../../redux/authReducer';

class HeaderContainer extends React.Component{

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    .then(response => {
        if(response.data.resultCode===0){
          let id = response.data.data.id;
          let login = response.data.data.login;
          let email = response.data.data.email;
          this.props.setAuthUserData(id, login, email);
        }

    }
    )
}

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

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);