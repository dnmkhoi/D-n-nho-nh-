import React, { Component, useState } from "react";
import Navbar from "./CustomNavbar";
import Sidebar from "./CustomSidebar";
import Footer from "./CustomFooter";
import active from "../../img/active.png";
import pending from "../../img/pending.png";
import process from "../../img/process.png";

var ketQua;
var nam_xl_trehan;
var nam_dangxlconhan;
var nam_xltruochan;
var nam_sltiepnhanmoi;
var nam_dangxltrehan;
var nam_xldunghan;
var tiLe;
class Dashboard extends Component {
  render() {
    <script>
    let [loading, setLoading] = useState(false);
    window.addEventListener("load", function(event) {
      fetch("http://dvctt.camau.gov.vn/api/forward/https://dvctt.camau.gov.vn/api/thongke/getthongketoantinh?nam=2022", {
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
                    <h1 className="m-0">Trang quản trị</h1>
                  </div>
                  {/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="/">Trang chủ</a>
                      </li>
                      <li className="breadcrumb-item active">Trang quản trị</li>
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
                  <section className="col-lg-12">
                    <div class="container">
                      <h1 style={{ textAlign: "center" }}>
                        --------------------------------
                      </h1>
                      <h3 class="tle mb-0" style={{ textAlign: "center" }}>
                        Hiện trạng kết nối chia sẻ dữ liệu
                        <br />
                        <br />
                        <span class="line"></span>
                      </h3>
                      <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover">
                          <thead>
                            <tr>
                              <th>STT</th>
                              <th>
                                <a
                                  class="text-trang"
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="..."
                                >
                                  Hệ thống chia sẻ, tích hợp
                                </a>
                              </th>
                              <th>
                                <a
                                  class="text-trang"
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Hệ thống quản lý tập trung, dự án xây dựng theo yêu cầu "
                                >
                                  Hệ thống
                                </a>
                              </th>
                              <th>
                                <a
                                  class="text-trang"
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Dữ liệu xe thu thập và quản lý trong CSDL"
                                >
                                  Tài liệu
                                </a>
                              </th>
                              <th>
                                <a
                                  class="text-trang"
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Quy chuẩn cấu trúc dữ liệu trao đổi theo quy định"
                                >
                                  Kết nối <br />
                                  LGSP
                                </a>
                              </th>
                              <th>
                                <a
                                  class="text-trang"
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Cung cấp dịch vụ theo chuẩn và qua NGSP"
                                >
                                  Trạng thái <br />
                                  tích hợp trên cổng DVC
                                </a>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-center">1</td>
                              <td>CSDLQG về Dân cư</td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={process}
                                  alt=""
                                  data-original-title="Đang triển khai dự án"
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={process}
                                  alt=""
                                  data-original-title="Đang phát phiếu thu thập toàn quốc, một số tỉnh đã xây dựng"
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title="Nghị định 137/2015/NĐ-CP"
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title="QCVN 109L2017/BTTTT"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">2</td>
                              <td>CSDLQG về đăng ký doanh nghiệp</td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title="Thuộc hệ thống đăng ký doanh nghiệp đang vận hành"
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={process}
                                  alt=""
                                  data-original-title="NĐ  78/2015/NĐ-CP và 108/2018/NĐ-CP nhưng có liên quan"
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={pending}
                                  alt=""
                                  data-original-title="Chưa chuẩn hóa và ban hành"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">3</td>
                              <td>Tích hợp lĩnh vực Bảo hiểm xã hội</td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title="Đang triển khai dự án VILG"
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title="Một số địa phương đã có nguồn dữ liệu"
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title="Thông tư 75/2015/TT-BTNMT nhưng chưa phải cho CSDLQG"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">4</td>
                              <td>
                                Hệ thống thông tin quản lý hợp đồng công chứng
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={pending}
                                  alt=""
                                  data-original-title="Mới lập đề án"
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={pending}
                                  alt=""
                                  data-original-title="Các CSDL chuyên ngành đã vận hành là nguồn thu thập"
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={pending}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={pending}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">5</td>
                              <td>Kết nối CSDL Quốc Gia Về TTHC (*)</td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title="Các CSDL chuyên ngành đã được xây dựng"
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">6</td>
                              <td>
                                Kết nối CSDL Quốc gia về Thanh toán trực tuyến
                                (*)
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">7</td>
                              <td>
                                Kết nối CSDL Quốc gia về Thanh toán thuế đất (*)
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">8</td>
                              <td>Tích hợp lĩnh vực Hộ tịch tư pháp</td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">9</td>
                              <td>Tích hợp lĩnh vực Lý lịch tư pháp</td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">10</td>
                              <td>
                                Tích hợp hệ thống danh mục dùng chung qua trục
                                LGSP
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                              <td class="text-center">
                                <img
                                  data-toggle="tooltip"
                                  title=""
                                  src={active}
                                  alt=""
                                  data-original-title=""
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div>
                          <a style={{ fontWeight: "bold" }}>Chú thích: </a>
                        </div>
                        <div
                          class="row"
                          style={{ maxWidth: "100" + "%", textAlign: "center" }}
                        >
                          <div class="col-md-4 mb-10">
                            <img
                              class="mr-10"
                              src={active}
                              alt=""
                              height="30"
                            />
                            <em class="text-muted lin2">Đã thực hiện</em>
                          </div>
                          <div class="col-md-4 mb-10">
                            <img
                              class="mr-10"
                              src={process}
                              alt=""
                              height="30"
                            />
                            <em class="text-muted lin2">Đang thực hiện</em>
                          </div>
                          <div class="col-md-4 mb-10">
                            <img
                              class="mr-10"
                              src={pending}
                              alt=""
                              height="30"
                            />
                            <em class="text-muted lin2">Chưa thực hiện</em>
                          </div>
                        </div>
                        <div>
                          <a
                            style={{ fontStyle: "oblique", fontSize: "small" }}
                          >
                            * Các kết nối CSDLQG được quy định tại Quyết định số
                            714/QĐ-TTg của Thủ tướng Chính phủ không thông qua
                            trục LGSP
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
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
export default Dashboard;
