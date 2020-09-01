import React from 'react';
import { Button } from '@material-ui/core';
import './RegisterPage.css';

const RegisterPage = () =>{
    return (<div className="registerPage"><h2>Register Page</h2>
    
    <Button variant="outlined">Szállásadó</Button>
    <Button variant="outlined">Vendég</Button>

    </div>);
}

export default RegisterPage;