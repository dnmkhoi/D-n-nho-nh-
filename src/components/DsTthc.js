import React, { Component } from 'react';
import Test from '../pages/Test';
import jsonData from '../jsonData.json';
import { useState } from 'react';

export default function DsTthc(){
    const [idKetnoi, setIdKetnoi] = useState(0);
    const [idApi, setIdApi] = useState(0);
        return (
        <section className="content">
            <div className="container-fluid">
            <h3 class="tle mb-0">Danh sách kết nối hoàn thành<br/><span class="line"></span></h3>
            <form action="enhanced-results.html">
                <div className="row">
                    <div className="col-md-12 offset-md-1">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                <label>Kết nối:</label>
                                <select class="form-control" onChange={e => setIdKetnoi(e.target.value)} >
                                    <option value="0">--Chọn kết nối--</option>
                                    {jsonData.map(function (i) {
                                        return <option value={i.idKetnoi}>{i.tenKetnoi}</option>
                                    })}
                                </select>
                                {
                                    idKetnoi > 0 ? (
                                        <div className="form-group">
                                            <label>API:</label>
                                            <select class="form-control" onChange={e => setIdApi(e.target.value)} >
                                                <option value="0">--Chọn kết nối--</option>
                                                {jsonData.filter((list) => list.idKetnoi == idKetnoi)[0].api.map(function (i) {
                                                    return <option value={i.id}>{i.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        //<pre>{JSON.stringify(jsonData.filter((list) => list.idKetnoi == idKetnoi)[0].api, null, 2) }</pre>
                                    ) : (
                                        null
                                    )
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        idApi > 0 ? (
                            <div class="col-md-12 offset-md-1">
                                <Test api={jsonData.filter((list) => list.idKetnoi == idKetnoi)[0].api.filter((list) => list.id == idApi)[0]} url={jsonData.filter((list) => list.idKetnoi == idKetnoi)[0].url}/>
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