import React, { useState } from "react";
import "../design/login_css.css";
export default function Login(props) {
  // const setValidity = props.ustate_fn;
  // setValidity(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [serverLoginMsg, setServerLoginMsg] = useState('');
    function checkIfUserExist(e){
        e.preventDefault();
        let user = {email:email, password:password}
        fetch(`http://localhost:8000/api/user/auth/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then( async function(res) {
        const resJson = await res.json();
        setServerLoginMsg(resJson);
        setTimeout(()=>{if(resJson === "User Found!!"){
            setServerLoginMsg("Redirecting to homepage...");
            setTimeout(()=>{
              // setValidity(true);
              window.location.pathname = '/Healthup/home';
            },1000);
        }}
        ,2000);
      });
    }
  return (
    <>
    <form onSubmit={checkIfUserExist}>
      <section className="vh-100 gradient-custom">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ "borderRadius": "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password <small>{password}</small>
                      </label>
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a><br/>
                      <span style={{'color':'red'}}>{serverLoginMsg}</span>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </form>
    </>
  );
}
