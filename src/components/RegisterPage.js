import React from 'react';
import RegisterUser from './RegisterUser';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import './RegisterPage.css';

const RegisterPage = () =>{
    return (<div className="registerPage"><h2>Regisztráció</h2>
    
    <Button variant="outlined">Szállásadó</Button>
    <Button variant="outlined">Vendég</Button>
    {/* <Input type="text" placeholder="Felhasználó név"/>
    <Input type="password" placeholder="Jelszó"/> */}

<RegisterUser/>

    </div>);
}

export default RegisterPage;