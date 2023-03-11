import React from 'react'
import FormLog from './FormLog';
import './Login.css';

const LoginPage = () => {

const handleLogin = (email, apiToken) => {
    console.log({email});
    console.log({apiToken});
    console.log('test')
    // if((email!='123@gmail.com')&&(apiToken!='123')){
        
    // }
}
return (
    <FormLog
        handleClick={handleLogin}
    />
)
}

export default LoginPage;
