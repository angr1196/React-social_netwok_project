
import LoginForm from "./LoginForm"
import { login } from "../../redux/authReducer"
import { connect } from "react-redux"
import { Navigate } from 'react-router-dom';

const Login = (props) => {

    if(props.isAuth){
        return <Navigate to ='/profile'/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm login={props.login} authErrors ={props.authErrors}/>
    </div>

}

let mapStateToProps = (state)=>{
    return{
        isAuth: state.auth.isAuth,
        authErrors: state.auth.authErrors
    }
}

export default connect(mapStateToProps, {login})(Login);