import React, { useState } from 'react';
import ReactJson from 'react-json-view';

export default function TracuuHoso(){
    var ketQua;
    const [result, setResult] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        var tuKhoa = document.getElementById('search').value;
        if(tuKhoa == ''){
            alert('Vui lòng nhập từ khóa');
        }else{
            console.log(tuKhoa)
            fetch("https://cors-anywhere.herokuapp.com/http://dvctt.camau.gov.vn/api/hoso/tracuuhoso?tukhoa="+tuKhoa, {
                method: 'GET'
            })
                .then(res => res.text())
                .then(
                    (ketQua) => {
                        ketQua = JSON.stringify(JSON.parse(ketQua));
                        setResult(ketQua);
                    },
                    (error) => {
                        alert(error);
                    }
                  )              
        }
      }
        return (
        <section className="content">
            <div className="container-fluid">
            <h3 class="tle mb-0">Tra cứu hồ sơ từ hệ thống Dịch vụ công trực tuyến Tỉnh Cà Mau<br/><span class="line"></span></h3>
            <form action="enhanced-results.html">
                <div className="row">
                    <div className="col-md-8 offset-md-1" style={{float:'none',margin:'0px auto'}}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                        <div className="col-md-10 offset-md-1">                                        
                                            <input type="text" id="search" class="form-control bo-l bo-none"  placeholder="Nhập mã hồ sơ/CCCD/CMND"></input>
                                        </div>
                                        <div className="col-md-2 offset-md-1">
                                            <input type="button" id="btnSearch" value="Tìm kiếm" onClick={handleSubmit} class="btn btn-primary" style={{height:'40px',width:'100%'}}></input>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {                           
                        result != '' ? (
                                <div class="col-md-12 offset-md-1">
                                    <div className="row justify-content-center">
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