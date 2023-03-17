import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) =>{
    return(
        <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU' />
        <div className={s.loginBlock}>
        {props.isAuth
        ?<div>{props.login}<button onClick={props.logout}>Logout</button></div>
        :<NavLink to ={'/login'}>Login</NavLink>}
          
        </div>
      </header>
    )
}

export default Header;