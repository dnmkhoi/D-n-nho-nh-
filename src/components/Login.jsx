import React, {useState} from 'react';
import Navbar from './CustomNavbar';
import Footer from './CustomFooter';
import PropTypes from 'prop-types';
import loginimg from '../img/login.svg'

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
    <div>
      <FormInput description="Tài khoản" placeholder="Nhập tài khoản" type="text" onChange ={props.onChange}/>
      <FormInput description="Mật khẩu" placeholder="Nhập mật khẩu" type="password"/>
      <FormButton title="Đăng nhập"/>
    </div>
 );
 
 const FormButton = props => (
   <div id="button" class="row-login login">
     <button>{props.title}</button>
   </div>
 );
 
 const FormInput = props => (
   <div class="row-login login">
     <label>{props.description}</label>
     <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
   </div>  
 );
 
 export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();  

  const handleSubmit = async e => {
    e.preventDefault();
    if(username == process.env.REACT_APP_USERNAME && password == process.env.REACT_APP_PASSWORD){
      window.location.href = '/dashboard';
      setToken({"token":Date.now()});      
    }
  }
    require('./Login.css');
    return (
      <div>
        <Navbar />
        <form onSubmit={handleSubmit}>
          <div class="row-login">
            <div class="col-md-6" style={{textAlign: "center"}}>
                <img src={loginimg} width="600"/>
            </div>
            <div class="col-md-6" style={{textAlign: "center"}}>
              <div id="loginform"> 
              {/* style={{boxShadow: "1px 1px 5px 2px rgb(0 0 0 / 30%)" }} */}
                <div class="row-login login" style={{marginLeft: "0px"}}>
                  <label>TÀI KHOẢN</label>
                  <input type="text" placeholder="Nhập tài khoản" onChange={e => setUserName(e.target.value)} />
                </div>
                <div class="row-login login" style={{marginLeft: "0px"}}>
                  <label>MẬT KHẨU</label>
                  <input type="password" placeholder="Nhập mật khẩu" onChange={e => setPassword(e.target.value)} />
                </div>
                <div id="button" class="row-login login button-login" style={{marginLeft: "0px"}}>
                  <button type="submit" class="button-login">ĐĂNG NHẬP</button>
              </div>
             </div>             
            </div>            
          </div>
        </form>
        <div style={{"left":"0","bottom":"0","width":"100%","overflow":"hidden"}}>
          <Footer />
        </div>
      </div>
    );
  }
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };