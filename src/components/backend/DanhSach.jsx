import React, { Component, useState } from "react";
import Navbar from "./CustomNavbar";
import Sidebar from "./CustomSidebar";
import Footer from "./CustomFooter";
import DanhMuc from "./DanhMucKetNoi";

var ketQua;
var nam_xl_trehan;
var nam_dangxlconhan;
var nam_xltruochan;
var nam_sltiepnhanmoi;
var nam_dangxltrehan;
var nam_xldunghan;
var tiLe;
class DanhSach extends Component {
  
  render() {
    <script>
    let [loading, setLoading] = useState(false);
    window.addEventListener("load", function(event) {
      fetch("http://dvctt.camau.gov.vn/api/forward/http://dichvucong.soctrang.gov.vn/api/mobilesoctrang/getthongketoantinh?nam=2022", {
        method: 'GET'
    })
        .then(res => res.text())
        .then(
            (ketQua) => {
                console.log('Kết quả>> '+ketQua)
                console.log('>>>array>> '+JSON.stringify(ketQua))
                var JSONObject = JSON.parse(ketQua);
                nam_xl_trehan = JSONObject["nam_xltrehan"];
                nam_dangxlconhan = JSONObject["nam_dangxlconhan"];      
                nam_xltruochan = JSONObject["nam_xltruochan"];
                nam_sltiepnhanmoi = JSONObject["nam_sltiepnhanmoi"]; 
                nam_dangxltrehan = JSONObject["nam_dangxltrehan"];
                nam_xldunghan = JSONObject["nam_xldunghan"];
                tiLe = (((nam_xldunghan+nam_xltruochan+nam_dangxlconhan)/nam_sltiepnhanmoi)*100);
                console.log('ketqua> '+nam_xl_trehan)     
                document.querySelector('.tiepNhan').innerHTML = new Intl.NumberFormat().format(nam_sltiepnhanmoi);
                document.querySelector('.tiLe').innerHTML = tiLe.toString().substr(0, 5)+'%';
                document.querySelector('.treHan').innerHTML = new Intl.NumberFormat().format(nam_dangxltrehan+nam_xl_trehan);
                document.querySelector('.dungHan').innerHTML = new Intl.NumberFormat().format(nam_xldunghan+nam_xltruochan+nam_dangxlconhan);
              },
            (error) => {
                console.log('Lỗi kết nối API>> '+error);
            }
          )
    });
    </script>
    return (
      <body class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
          <Navbar />
          <Sidebar />
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Danh mục kết nối LGSP</h1>
                  </div>
                  {/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="/">Danh mục kết nối LGSP</a>
                      </li>
                      <li className="breadcrumb-item active">Danh mục kết nối LGSP</li>
                    </ol>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                {/* Small boxes (Stat box) */}
                <div className="row">
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-info">
                      <div className="inner">
                        <h3 className="tiepNhan"></h3>
                        <p>Số hồ sơ đã tiếp nhận</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-pie-graph" />
                      </div>
                      <a
                        href="https://dvctt.camau.gov.vn/thong-ke"
                        className="small-box-footer"
                      >
                        Xem chi tiết <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-success">
                      <div className="inner">
                        <h3 className="tiLe"></h3>
                        <p>Tỉ lệ hồ sơ xử lý đúng hạn</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars" />
                      </div>
                      <a
                        href="http://dvctt.camau.gov.vn/thong-ke"
                        className="small-box-footer"
                      >
                        Xem chi tiết <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-warning">
                      <div className="inner">
                        <h3 className="treHan"></h3>
                        <p>Số hồ sơ xử lý trễ hạn</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-pie-graph" />
                      </div>
                      <a
                        href="http://dvctt.camau.gov.vn/thong-ke"
                        className="small-box-footer"
                      >
                        Xem chi tiết <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-danger">
                      <div className="inner">
                        <h3 className="dungHan"></h3>
                        <p>Số hồ sơ xử lý đúng hạn</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-pie-graph" />
                      </div>
                      <a
                        href="http://dvctt.camau.gov.vn/thong-ke"
                        className="small-box-footer"
                      >
                        Xem chi tiết <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}
                </div>
                {/* /.row */}
                {/* Main row */}
                <div className="row">
                  {/* Left col */}
                  <DanhMuc />
                  {/* /.Left col */}
                </div>
              </div>
            </section>
            {/* /.content */}
          </div>

          <Footer />
        </div>
      </body>
    );
  }
}
export default DanhSach;
