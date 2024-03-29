import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News';
import { Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from './hoc/WithRouter';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
}

  render() {
    if(!this.props.isInitialized){
      return <Preloader/>
    }
    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="content-wrapper" >
          <Routes>
            <Route path='/profile/:userId*' element={<ProfileContainer />} />
            <Route path='/profile/' element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) =>({
  isInitialized: state.app.isInitialized
})

export default compose(
  connect(mapStateToProps,{initializeApp}),
  withRouter)
  (App);