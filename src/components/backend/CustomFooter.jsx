import React, { Component } from 'react';

class CustomFooter extends Component {
    render() {
        return (
        <div>
            <footer className="main-footer">
            <strong>Bản quyền © 2014-2021 <a href="#">Camau.gov.vn</a>.</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.1.0
            </div>
            </footer>
        </div>
        );
    }
}

export default CustomFooter;