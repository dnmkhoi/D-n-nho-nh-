import { useState } from 'react';
import CryptoJS from 'crypto-js';

export default function useToken() {
    var SECRET_KEY = 'duannhonho';
    const getToken = () => {
        let userToken = null;
        const tokenString = sessionStorage.getItem('token');
        try{ 
            if(tokenString){
                userToken = JSON.parse(CryptoJS.AES.decrypt(tokenString, SECRET_KEY).toString(CryptoJS.enc.Utf8));
            }
        } catch(e) { 
            console.log("Caught: " + e.message)
        }
        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', CryptoJS.AES.encrypt(JSON.stringify(userToken), SECRET_KEY));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}