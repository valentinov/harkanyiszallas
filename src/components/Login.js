import React from 'react';

const Login = () =>{
    return (<div className="d-flex text-center">

        <form className="form-login">
            <img className="mb-4" src="./node_modules/bootstrap-icons/icons/bootstrap.svg" width="72" height="72" alt=""></img>
            <div className="mb-3">
                <input type="email" className="form-control ip-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"></input>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control ip-3" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Bejelentkezés</button>
        </form>

    </div>)
}

export default Login;