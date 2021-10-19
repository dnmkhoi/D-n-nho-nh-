import React, { useEffect, useState } from 'react';
import XMLViewer from 'react-xml-viewer';
import ReactJson from 'react-json-view';

export default function CallApi({ api, url}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState();
  useEffect(() => {
    setError(null);
    setIsLoaded(false);
    setItem();
    getToken().then(result => {
      fetch(url + api.url + (api.method == 'GET' ? "?" + new URLSearchParams(api.param) : ''), {
        method: api.method,
        headers: JSON.parse(JSON.stringify(api.header).replace('{token}', JSON.parse(result).access_token)),
        body: (api.method == 'POST' ? JSON.stringify(api.body) : null)
      })
        .then(res => res.text())
        .then(
          (result) => {
            setItem(result);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    });
  }, [api, url])
  async function getToken() {
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
    const result = await response.text();
    return result;
  }
  return (
    <div>
      <pre>Danh sách tham số: {JSON.stringify((api.method == 'GET' ? api.param : api.body))}</pre>
      {(error ? <span>Error: {error.message}</span> :
        (!isLoaded ? <pre>Đang tải...</pre> :
          <div><pre>{api.respone == 'json' ?
            //JSON.stringify(JSON.parse(JSON.stringify(item).replace(/\t/g, '')).loadRecordResponse.return, null, 2) 
            (item ? <ReactJson src={JSON.parse(item)} /> : null)
            : <XMLViewer xml={item} />}</pre></div>))}
    </div>
  )
}