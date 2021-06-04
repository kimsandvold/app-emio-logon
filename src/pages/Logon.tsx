import React, { useState } from 'react';
import { PostLogin } from '../xhr/AuthApiRequests';
import '../App.css';
import '../assets/styles/Logon.scss';
import ILogonPayload from "../interface/ILogonPayload";

const LogonForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Logon = (e: any) => {
        e.preventDefault();
        const payload: ILogonPayload = {
            username: '',
            password: ''
        };
        PostLogin(payload).finally(() => {
            console.log('ferdig postet'+username)
        });
        alert('Logon')
    };

    return (
        <div id="logon">
            <div className="container">
                <div className="row m-5 no-gutters shadow-lg">
                    <div className="col-md-6 d-none d-md-block">
                        <img src={require('../assets/images/bg.jpg').default} className="img-fluid fullheight" />
                    </div>
                    <div className="col-md-6 bg-white p-5">
                        <h3 className="pb-3">Logg inn</h3>
                        <div className="form-style">
                            <form>
                                <div className="form-group pb-3">
                                    <input type="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group pb-3">
                                    <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span className="pl-2 font-weight-bold">Remember Me</span></div>
                                    <div><a href="#">Forget Password?</a></div>
                                </div>
                                <div className="pb-2">
                                    <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2" onClick={(e) => Logon(e)}>Logg inn</button>
                                </div>
                            </form>
                            <div className="sideline">Eller</div>
                            <div>
                                <button type="submit" className="btn btn-primary w-100 font-weight-bold mt-2"><i className="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button>
                            </div>
                            <div className="pt-4 text-center">
                                <a href="#">Registrer deg</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );

}

export default LogonForm;