import React, { useState } from 'react';
import { PostLogin } from '../xhr/AuthApiRequests';
import '../assets/styles/Logon.scss';
import ILogonPayload from "../interface/ILogonPayload";
import { SetToken } from '../store/auth';
import ILogonResponse from '../interface/ILogonResponse';

const LogonForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(1);

    const Logon = (e: any) => {

        e.preventDefault();
        const payload: ILogonPayload = {
            username,
            password
        };
        PostLogin(payload).then((response: ILogonResponse) => {
            SetToken(response.token)
            console.log({ response });
        }).finally(() => {
            console.log('ferdig postet' + username)
        });

    };

    return (
        <div id="logon">
            <div className="">
                <div className="row  no-gutters shadow-lg fillpage">

                    <div className="col-md-5 col-sm-6 bg-white p-5">
                        <h1>emio</h1>
                        <h4 className="pb-3">Logg inn</h4>
                        <div className="form-style">
                            <form>
                                <div className="form-group pb-3">
                                    <input type="email"
                                        placeholder="Username..."
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group pb-3">
                                    <input type="password"
                                        placeholder="Passord..."
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                        id="exampleInputPassword1" />
                                </div>
                                <div className="d-flex align-items-center justify-constent-between">
                                    <div className="d-flex align-items-center">
                                        <input name="" type="checkbox" /> <span className="pl-2 font-weight-bold">Husk Meg</span></div>
                                    <div><a href="#">Glemt passord?</a></div>
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
                    <div className="col-md-7 col-sm-6 d-sm-block d-none d-md-block bg-pic">
                        
                   
                    </div>
                </div>
            </div>
        </div>


    );

}

export default LogonForm;