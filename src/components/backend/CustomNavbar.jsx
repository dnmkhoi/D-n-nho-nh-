import React, { Component } from 'react';

class CustomNavbar extends Component {
    render() {
        return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                <a href="/home" className="nav-link">Trang chủ</a>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">         
                <li className="nav-item">
                <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i className="fas fa-expand-arrows-alt" />
                </a>
                </li>
            </ul>
            </nav>
        </div>
        );
    }
}

export default CustomNavbar;