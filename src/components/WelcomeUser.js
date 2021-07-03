import React from 'react';
import { connect } from 'react-redux'
import { LogOut } from './Logout'
import NavBar from './NavBar'

const WelcomeUser = (props) => {
return (
  <div>
    <div className="header">
      <h1>E-Baseball</h1>
      <h2>A marketplace for baseball trading cards</h2>
      <LogOut/>
    </div>
  </div>
  )
}

  const mapStateToProps = state => {
    return ({
      loggedIn: state.userReducer.id,
    })
  }

export default (connect(mapStateToProps)(WelcomeUser));