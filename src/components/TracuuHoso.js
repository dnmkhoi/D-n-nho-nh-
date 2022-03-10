import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import Spinner from '../Spinner';

export default function TracuuHoso(){
    var ketQua;
    const [result, setResult] = useState('');
    let [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        var tuKhoa = document.getElementById('search').value;
        if(tuKhoa == ''){
            alert('Vui lòng nhập từ khóa');
            setLoading(false);                   
        }else{
            console.log(tuKhoa)
            fetch("http://dvctt.camau.gov.vn:80/api/forward/http://dichvucong.soctrang.gov.vn/api/hoso/tracuuhoso?tukhoa="+tuKhoa, {
                method: 'GET'
            })
                .then(res => res.text())
                .then(
                    (ketQua) => {
                        ketQua = JSON.stringify(JSON.parse(ketQua));
                        setResult(ketQua);
                        setLoading(false);                   
                    },
                    (error) => {
                        alert(error);
                        setLoading(false);                   

                    }
                  )
        }
      }
        return (
        <section className="content">
            <Spinner loading={loading} />
            <div className="container-fluid">
            <h3 class="tle mb-0">Tra cứu hồ sơ từ hệ thống Dịch vụ công trực tuyến Tỉnh Cà Mau<br/><span class="line"></span></h3>
            <form action="enhanced-results.html">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8" style={{ float: "none", margin: "0 auto" }}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" id="search" className="form-control"  placeholder="Nhập mã hồ sơ/CCCD/CMND"></input>
                                        <span className="input-group-btn"><span className="btn group-btn-custom" onClick={e => { setLoading(true); handleSubmit(e) }}>Tìm kiếm</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {                           
                        result != '' ? (
                                <div class="col-md-12">
                                    <div className="row">
                                        <div className="col-md-8" style={{ float: "none", margin: "0 auto" }}>
                                            <div>
                                                <pre style={{marginTop:'10px'}}>
                                                    {(result == '[]' ? <div>Không tìm thấy dữ liệu!!</div> : <ReactJson src={JSON.parse(result)} />)}
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ) : (
                            null
                        )
                    }
                </div>
            </form>
            </div>            
        </section>
        );
}
