import React, { Component } from 'react';
import './Login.css';
const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);
const Form = props => (
    <div>
      <FormInput description="Tài khoản" placeholder="Nhập tài khoản" type="text" />
      <FormInput description="Mật khẩu" placeholder="Nhập mật khẩu" type="password"/>
      <FormButton title="Đăng nhập"/>
    </div>
 );
 
 const FormButton = props => (
   <div id="button" class="row">
     <button>{props.title}</button>
   </div>
 );
 
 const FormInput = props => (
   <div class="row">
     <label>{props.description}</label>
     <input type={props.type} placeholder={props.placeholder}/>
   </div>  
 );
 
class Login extends Component {
    render() {
        return (
            <div id="loginform">
            <FormHeader title="Đăng nhập" />
            <Form />
          </div>
        );
    }
}

export default Login;