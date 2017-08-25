import React from "react";
const Register = () => {
  return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6 align-self-center">
                    <div className="card">
                        <div className="card-header">
                            Register User
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <input type="text" className="form-control" placeholder="Enter name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control"  placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputMobile">Mobile Number</label>
                                    <input type="tel" className="form-control"  placeholder="Enter mobile"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control"  placeholder="Password"/>
                                </div>
                                <button type="button" className="btn btn-primary btn-block">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;