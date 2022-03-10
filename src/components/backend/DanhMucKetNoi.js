import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import Spinner from '../../Spinner';
import active from "../../img/active.png";
import pending from "../../img/pending.png";
import process from "../../img/process.png";

export default function DanhMucKetNoi(){
    let [loading, setLoading] = useState(false);


    async function getTokenSS(e) {
  
        const response = await fetch("http://dvctt.camau.gov.vn/api/forward/http://192.168.50.81:8081/XrdAdapter/RestService/forward/mapi/login?dstcode=VN:GOV:000.00.00.G22:vpcpdvcprovider", {
          method: 'POST'
        });
        const result = await response.text()
        .then(
            (result) =>{
                alert('Kết nối thành công');
                console.log('result>> '+result);
                setLoading(false);
            },
            (error) => {
                alert(error);
                setLoading(false);
            }
        )
        return result;
      }
      
      async function getTokenLGSP(e) {
        const response = await fetch("http://lgsp.cqdtcamau.vn:8280/token", {
          method: 'POST',
          headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa("z64t8FuofvlctpQgdERO_XjDhfsa:sRvUXexTzza24QFrNoapDXMpG3ca")
          }),
          body: new URLSearchParams({
            "grant_type": "client_credentials"
          })
        });
        const result = await response.text()
        .then(
            (result) =>{
                alert('Kết nối thành công');
                console.log('result>> '+result);
                setLoading(false);
            },
            (error) => {
                alert(error);
                setLoading(false);
            }
        )
        return result;
      }
        return (
            <section className="col-lg-12">
            <div class="container">
              <h1 style={{ textAlign: "center" }}>
                --------------------------------
              </h1>
              <h3 class="tle mb-0" style={{ textAlign: "center" }}>
                Danh mục kết nối LGSP
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
                          data-original-title="Cung cấp dịch vụ theo chuẩn và qua NGSP"
                        >
                          Trạng thái <br />
                          tích hợp trên cổng DVC
                        </a>
                      </th>
                      <th>
                        <a
                          class="text-trang"
                          href="#"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Kiểm tra trạng thái kết nối LGSP"
                        >
                          Kiểm tra <br />
                          kết nối
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
                          src={active}
                          alt=""
                          data-original-title="Đang triển khai dự án"
                        />
                      </td>
                      <td>
                        <button type="button" class="btn btn-block btn-primary" onClick={e => { setLoading(true); getTokenSS(e) }}>Kiểm tra kết nối</button>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">2</td>
                      <td>CSDLQG về đăng ký doanh nghiệp</td>
                      
                      <td class="text-center">
                        <img
                          data-toggle="tooltip"
                          title=""
                          src={pending}
                          alt=""
                          data-original-title="Chưa chuẩn hóa và ban hành"
                        />
                      </td>
                      <td>
                        <button type="button" class="btn btn-block btn-primary" onClick={e => { setLoading(true); getTokenSS(e) }}> Kiểm tra kết nối</button>
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
                          data-original-title="Thông tư 75/2015/TT-BTNMT nhưng chưa phải cho CSDLQG"
                        />
                      </td>
                      <td>
                        <button type="button" class="btn btn-block btn-primary" onClick={e => { setLoading(true); getTokenSS(e) }}>Kiểm tra kết nối</button>
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
                          data-original-title=""
                        />
                      </td>
                      <td>
                    <button type="button" class="btn btn-block btn-primary" onClick={e => { setLoading(true); getTokenSS(e) }}>Kiểm tra kết nối</button>
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
                      <td>
                        <button type="button" class="btn btn-block btn-primary" onClick={e => { setLoading(true); getTokenSS(e) }}>Kiểm tra kết nối</button>
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
                          src={process}
                          alt=""
                          data-original-title=""
                        />
                      </td>
                      <td>
                        <button type="button" class="btn btn-block btn-primary" onClick={e => { setLoading(true); getTokenSS(e) }}>Kiểm tra kết nối</button>
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
                      <td>
                        <button type="button" class="btn btn-block btn-primary" onClick={e => { setLoading(true); getTokenSS(e) }}>Kiểm tra kết nối</button>
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
                      <td>
                        <button type="button" class="btn btn-block btn-primary" onClick={e => { setLoading(true); getTokenLGSP(e) }}>Kiểm tra kết nối</button>
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
                      <td>
                        <button type="button" class="btn btn-block btn-primary" onClick={e => { setLoading(true); getTokenLGSP(e) }}>Kiểm tra kết nối</button>
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
                      <td>
                        <button type="button" class="btn btn-block btn-primary" onClick={e => { setLoading(true); getTokenLGSP(e) }}>Kiểm tra kết nối</button>
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
        );
}
