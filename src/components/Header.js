import {Link} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {authenticationActions} from "../redux/authenticationReducers";
import {useLocation} from "react-router";
import './Header.css';

function showUserInfo(currentUser){
    let message = '';
    if (currentUser) {
        message = (
            <div className="hello-message">
                <div className="hello"> Hello </div>
                <div className="username">{currentUser.name}</div>
                <button className="ui button helloButton" onClick={() => this.onLogoutClick()}>Logout</button>
            </div>
        );
    }
    return message;
}
function showLoginButton(currentUser, url){
    let logInButton = '';
    if (!currentUser) {
        logInButton = (
            <div className="hello-message">
                <Link
                    to={{
                        pathname: '/user/login',
                        state: { currentState: url },
                    }}
                    className="ui link login-button"
                >
                    Login
                </Link>
                <Link to="/user/register" className="ui link register-button">
                    Register
                </Link>
            </div>
        );
    }
    return logInButton;
}
function Header({currentUser}){
    const location = useLocation();
    return (
        <div className="">
            <div className="main-header">
                <div className="header-logo">
                    <img src="https://c2.staticflickr.com/2/1789/41965143275_b762350741_o.png" alt="icon" />
                </div>

                {showUserInfo(currentUser)}
                {showLoginButton(currentUser, location.pathname)}
            </div>
            <div className="portfolio-container">
                <div className="portfolio-title-holder">
                    <div className="portfolio-title">Portfolio</div>
                    <div className="portfolio-content">My all projects will be presented here</div>
                </div>
                <div className="portfolio-menu">
                    <div className="item">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="item">
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div className="item">
                        <Link to="/lifestyles">LifeStyles</Link>
                    </div>
                    <div className="item">
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(
    state => state.authentication,
    authenticationActions
)(Header);