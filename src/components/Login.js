import React from "react";


const Login = () => {
  return (
        <div className="container">
            <div className="row ">
                <div className="col-sm-6 col-md-offset-3">
                    <div className="panel">
                        <div className="panel-header">
                          <h3 className="panel-heading">
                            Login User
                          </h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <button type="button"  className="btn btn-primary btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Login;

