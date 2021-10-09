import React, { Component } from 'react';

import logo from '../img/logo_cmu.png';
class CustomNavbar extends Component {
    render() {
      require('./main.css');
      require('./clay.css');
        return (
            <nav class="navbar navbar-default sticky-top fixed-top navbar navbar-light padLR-50" id="banner">
   <div class="container-fluid bg-td">
      <div class="navbar-header">
         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#defaultNavbar1" aria-expanded="false"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> <a class="navbar-brand navbar-brand1" href="/"><img src={logo} height="80" alt=""/></a> 
      </div>
      <div class="collapse navbar-collapse" id="defaultNavbar1">

         <p class="text-right mt-10 mb-0 hidden-xs">
            <a class="text-vang" href="/login">Đăng nhập</a>
            <span class="cach">I</span>
            <a class="hidden-xs text-vang" href="/register">Đăng ký</a>
         </p>
         <ul class="nav navbar-nav navbar-right">
            <li class="nav-item dropdown dmenu">
               <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
               Dữ liệu CQNN
               </a>				
               <ul class="dropdown-menu sm-menu">
                  <div class="arrow-up"></div>
                  <li>
                     <a href="#">Hiện trạng</a>
                  </li>
                  <li>
                     <a href="#">Tình hình triển khai</a>
                  </li>
                  <li>
                     <a href="#">Đánh giá - Xếp hạng</a>
                  </li>
                  <li>
                     <a href="#">Chiến lược dữ liệu quốc gia</a>
                  </li>
               </ul>
            </li>
            <li class="nav-item dropdown dmenu">
               <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
               Dữ liệu mở
               </a>				
               <ul class="dropdown-menu sm-menu">
                  <div class="arrow-up"></div>
                  <li>
                     <a href="#">Thống kê dữ liệu mở</a>
                  </li>
                  <li>
                     <a href="#">Tìm kiếm dữ liệu</a>
                  </li>
                  <li>
                     <a href="#">Cơ quan cung cấp</a>
                  </li>
                  <li>
                     <a href="#">Lĩnh vực</a>
                  </li>
               </ul>
            </li>
            <li class="nav-item dropdown dmenu">
               <a href="#" class="">
               Dữ liệu danh mục
               </a>
            </li>
            <li class="nav-item dropdown dmenu">
               <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
               Văn bản - Hướng dẫn
               </a>				
               <ul class="dropdown-menu sm-menu">
                  <div class="arrow-up"></div>
                  <li>
                     <a href="#">Văn bản pháp luật</a>
                  </li>
                  <li>
                     <a href="#">Tiêu chuẩn - quy chuẩn</a>
                  </li>
                  <li>
                     <a href="#">Công nghệ</a>
                  </li>
                  <li>
                     <a href="#">Kinh nghiệm triển khai</a>
                  </li>
               </ul>
            </li>
            <li class="nav-item dropdown dmenu">
               <a href="#" class="">
               Ứng dụng
               </a>
            </li>
            <li class="visible-xs-block"><a class="bt-dn" href="/login">Đăng nhập</a></li>
            <li class="visible-xs-block"><a class="bt-dn" href="/register">Đăng ký</a></li>
         </ul>
      </div>
   </div>
</nav>
        );
    }
}

export default CustomNavbar;