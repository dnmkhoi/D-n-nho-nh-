import React, { Component } from 'react';
import Navbar from './CustomNavbar';
import Footer from './CustomFooter';
import DsTthc from './DsTthc';
import bg from '../img/bg.svg';

export default function Home(){
        return (
            <div>
                <Navbar />
                <body>
                <section id="body-of-portlet" class="">
                    <div class="columns-1" id="main-content" role="main">
                        <div class="portlet-layout row">
                            <div class="col-md-12 portlet-column portlet-column-only" id="column-1" style={{padding: "0px"}}>
                            <div class="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">
                                <div class="portlet-boundary portlet-boundary_vn_gov_data_portlet_DatagovPortlet_  portlet-static portlet-static-end decorate  " id="p_p_id_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke_">
                                    <span id="p_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke"></span>
                                    <section class="portlet" id="portlet_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke">
                                        <div class="portlet-content" style={{marginTop: '-25px'}}>
                                        <div class=" portlet-content-container">
                                            <div class="portlet-body">
                                                <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
                                                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                                                <script src="http://123.30.158.153:2000/socket.io/socket.io.js"></script> 
                                                <section class="bg-slide container-fluid">
                                                    <div class="row">
                                                    <div class="col-md-4 col-md-offset-1 mt-30slide">
                                                        <form class="mt-150" action="#">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control bo-l bo-none" name="q" placeholder="Bạn cần tìm gì?" id="inputlg"/>
                                                                <div class="input-group-btn">
                                                                <button class="btn btn-default bo-r bo-none" type="submit" style={{width:'37px',marginLeft:'-15px',height:'40px',borderRadius:'25px'}}>
                                                                <i class="fas fa-search text-xam"></i>
                                                                </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <h1 class="text-to">camau.gov.vn</h1>
                                                        <p class="text-trang">Điểm đầu mối kết nối, chia sẻ dữ liệu giữa các bộ, ngành, địa phương</p>                                                        
                                                    </div>
                                                    <div class="col-md-5 text-center col-md-offset-2"><img class="img-responsive" src={bg} style={{marginTop: "-30px", height: "580px"}}/></div>
                                                    </div>
                                                </section>                                               
                                            
                                                <section>
                                                    <div class="container">
                                                    <h3 class="tle mb-0">Hiện trạng kết nối chia sẻ dữ liệu<br/><span class="line"></span></h3>
                                                    <p class="text-center text-muted mb-30"><em class="">Danh mục CSDLQG được quy định tại Quyết định số 714/QĐ-TTg của Thủ tướng Chính phủ</em></p>
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered table-striped table-hover">
                                                            <thead>
                                                                <tr>
                                                                <th>STT</th>
                                                                <th><a class="text-trang" href="#" data-toggle="tooltip" title="" data-original-title="...">Hệ thống chia sẻ, tích hợp</a></th>
                                                                <th><a class="text-trang" href="#" data-toggle="tooltip" title="" data-original-title="Hệ thống quản lý tập trung, dự án xây dựng theo yêu cầu ">Hệ thống</a></th>
                                                                <th><a class="text-trang" href="#" data-toggle="tooltip" title="" data-original-title="Dữ liệu xe thu thập và quản lý trong CSDL">Tài liệu</a></th>
                                                                <th><a class="text-trang" href="#" data-toggle="tooltip" title="" data-original-title="Quy chuẩn cấu trúc dữ liệu trao đổi theo quy định">Kết nối <br/>LGSP</a></th>
                                                                <th><a class="text-trang" href="#" data-toggle="tooltip" title="" data-original-title="Cung cấp dịch vụ theo chuẩn và qua NGSP">Trạng thái <br/>tích hợp trên cổng DVC</a></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                <td class="text-center">1</td>
                                                                <td>
                                                                    CSDLQG về Dân cư
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-05.png" alt="" data-original-title="Đang triển khai dự án"/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-05.png" alt="" data-original-title="Đang phát phiếu thu thập toàn quốc, một số tỉnh đã xây dựng"/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-05.png" alt="" data-original-title="Nghị định 137/2015/NĐ-CP"/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-05.png" alt="" data-original-title="QCVN 109L2017/BTTTT"/>
                                                                </td>
                                                                </tr>
                                                                <tr>
                                                                <td class="text-center">2</td>
                                                                <td>
                                                                    CSDLQG về đăng ký doanh nghiệp
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title="Thuộc hệ thống đăng ký doanh nghiệp đang vận hành"/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-05.png" alt="" data-original-title="NĐ  78/2015/NĐ-CP và 108/2018/NĐ-CP nhưng có liên quan"/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-04.png" alt="" data-original-title="Chưa chuẩn hóa và ban hành"/>
                                                                </td>
                                                                </tr>
                                                                <tr>
                                                                <td class="text-center">3</td>
                                                                <td>
                                                                    Tích hợp lĩnh vực Bảo hiểm xã hội
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-05.png" alt="" data-original-title="Đang triển khai dự án VILG"/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-05.png" alt="" data-original-title="Một số địa phương đã có nguồn dữ liệu"/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-05.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-04.png" alt="" data-original-title="Thông tư 75/2015/TT-BTNMT nhưng chưa phải cho CSDLQG"/>
                                                                </td>
                                                                </tr>
                                                                <tr>
                                                                <td class="text-center">4</td>
                                                                <td>
                                                                    Hệ thống thông tin quản lý hợp đồng công chứng
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-04.png" alt="" data-original-title="Mới lập đề án"/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-04.png" alt="" data-original-title="Các CSDL chuyên ngành đã vận hành là nguồn thu thập"/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-04.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-04.png" alt="" data-original-title=""/>
                                                                </td>
                                                                </tr>
                                                                <tr>
                                                                <td class="text-center">5</td>
                                                                <td>
                                                                    Kết nối CSDL Quốc Gia Về TTHC (*)
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title="Các CSDL chuyên ngành đã được xây dựng"/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                </tr>
                                                                <tr>
                                                                <td class="text-center">6</td>
                                                                <td>
                                                                    Kết nối CSDL Quốc gia về Thanh toán trực tuyến (*)
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-05.png" alt="" data-original-title=""/>
                                                                </td>
                                                                </tr>
                                                                <tr>
                                                                <td class="text-center">7</td>
                                                                <td>
                                                                    Kết nối CSDL Quốc gia về Thanh toán thuế đất (*)
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                </tr>        
                                                                <tr>
                                                                <td class="text-center">8</td>
                                                                <td>
                                                                    Tích hợp lĩnh vực Hộ tịch tư pháp
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                </tr>   
                                                                <tr>
                                                                <td class="text-center">9</td>
                                                                <td>
                                                                    Tích hợp lĩnh vực Lý lịch tư pháp
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                <td class="text-center">
                                                                    <img   data-toggle="tooltip" title="" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" data-original-title=""/>
                                                                </td>
                                                                </tr>                                                                                                                                                                                         
                                                            </tbody>
                                                        </table>
                                                        <div>
                                                            <a style={{fontWeight: 'bold'}}>Chú thích: </a>
                                                        </div>
                                                        <div class="row mb-20" style={{maxWidth: '100'+'%',textAlign:'center'}}>
                                                            <div class="col-md-4 mb-20"><img class="mr-10" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-03.png" alt="" height="30"/><em class="text-muted lin2">Đã thực hiện</em></div>
                                                            <div class="col-md-4 mb-20"><img class="mr-10" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-05.png" alt="" height="30"/><em class="text-muted lin2">Đang thực hiện</em></div>
                                                            <div class="col-md-4 mb-20"><img class="mr-10" src="https://data.gov.vn/o/govTheme/images/gov/logo_data-04.png" alt="" height="30"/><em class="text-muted lin2">Chưa thực hiện</em></div>
                                                        </div>
                                                        <div>
                                                            <a style={{fontStyle:"oblique",fontSize:"small"}}>* Các kết nối với Cổng Quốc Gia không thông qua trục LGSP</a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </section>
                                                <section>
                                                    <DsTthc/>
                                                </section>
                                            </div>
                                        </div>
                                        </div>
                                    </section>
                                </div>                              
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                </body>
                <Footer />
            </div>
        );
}
