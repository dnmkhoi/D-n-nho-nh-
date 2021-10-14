import React, { useEffect, useState } from 'react';
import XMLViewer from 'react-xml-viewer';

function Test({api, url}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();
    useEffect(() => {
      // Promise.race([
      fetch("https://cors-anywhere.herokuapp.com/http://lgsp.cqdtcamau.vn:8280/token", {
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa("z64t8FuofvlctpQgdERO_XjDhfsa:sRvUXexTzza24QFrNoapDXMpG3ca")
        }),
        body: new URLSearchParams({
            "grant_type": "client_credentials"
        })
    })
    // ,
    // new Promise((_, reject) =>
    //     setTimeout(() => reject(setError('Timeout!')), 10000)
    // )
        .then(res => res.text())
        .then(
          (result) => {
            console.log(result);
            fetch("https://cors-anywhere.herokuapp.com/" + url + api.url  
            + (api.method == 'GET' ? "?" + new URLSearchParams(api.param) : ''), {
                method: api.method,
                headers: JSON.parse(JSON.stringify(api.header).replace('{token}', result.access_token)), //result.access_token
                body: (api.respone == 'POST' ? JSON.parse(api.body) : null)
            })
                .then(res => res.text())
                .then(
                  (result) => {
                    setIsLoaded(true);
                    setItems(result);
                  },
                  (error) => {
                    console.log(error);
                    setIsLoaded(true);
                    setError(error);
                  }
                )           
          },
          (error) => {
            setError(error);
          }
        )
      // ])
    }, [])
  
    if (error) {
      return <span>Error: {error.message}</span>;
    } else if (!isLoaded) {
      return <pre>Đang tải...</pre>;
    } else {
      return (
        <pre>{api.respone == 'json' ? JSON.stringify(items, null, 2) : <XMLViewer xml={items} />}</pre>
      );
    }
  }

export default Test;