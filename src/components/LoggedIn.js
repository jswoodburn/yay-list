import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {getAccessToken} from '../api/api';

const LoggedIn = (
    setToken
) => {
    const location = useLocation();
    const history = useNavigate();
    const params = new URLSearchParams(location.search);
    const code = params.get('code')
    
    useEffect(() => {
        if(code) {
            getAccessToken(code)
                .then(token => setToken(token))
                .then(token => history.push('http://localhost:3001/form'))
        }
    }, [code, history, setToken]);
    return (<>{}</>);
}

export default LoggedIn;