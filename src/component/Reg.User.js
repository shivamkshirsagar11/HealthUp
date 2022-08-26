import React,{useState} from 'react';
import "../design/register_css.css"
export default function RegUser() {
    const [password,setPassword] = useState('');
    const [fname,setFname] = useState('John');
    const [lname,setLname] = useState('Doe');
    const [email,setEmail] = useState('johndoe@xyz.com');
    const [address,setAddress] = useState('2,baker street,nyc');
    const [mno,setMno] = useState('0123456789');
    const [err,setErr] = useState('');
    const addUser = (e)=>{
      e.preventDefault();
      const fn = fname + " " + lname;
      let newUser = {
        email:email, password:password, full_name:fn,
        address:address,mobile:mno
      }
      fetch(`http://localhost:8080/api/user/reg/new`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then((res)=>{
        if(res.status === 200){
          window.location.pathname = "/";
          return "";
        }
        return res.json();
      })
      .then((data)=>{
          setErr(data);
      })// then ends here
    }
  return (
    <>
     <form className="h-100 h-custom gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card card-registration card-registration-2" style={{'borderRadius': '15px'}}>
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="p-5">
                  <h3 className="fw-normal mb-5" style={{'color': '#4835d4'}}>Account Information</h3>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">

                      <div className="form-outline">
                        <input type="text" id="fname" className="form-control form-control-lg" value={fname} onChange={(e)=>{setFname(e.target.value);}}/>
                        <label className="form-label" htmlFor="fname">First name</label>
                      </div>

                    </div>
                    <div className="col-md-6 mb-4 pb-2">

                      <div className="form-outline">
                        <input type="text" id="lname" className="form-control form-control-lg" value={lname} onChange={(e)=>{setLname(e.target.value);}}/>
                        <label className="form-label" htmlFor="lname">Last name</label>
                      </div>

                    </div>
                  </div>

                  <div className="mb-4 pb-2">
                    <div className="form-outline">
                      <input type="email" id="email" className="form-control form-control-lg" value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
                      <label className="form-label" htmlFor="email">Email</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">

                      <div className="form-outline">
                        <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={(e)=>{setPassword(e.target.value);}}/>
                        <label className="form-label" htmlFor="password">Password</label>
                        <br/><small>password: {password}</small>
                        <br/><span style={{'color': 'red'}}><b>{err}</b></span>
                      </div>

                    </div>
    
                  </div>

                </div>
              </div>
              <div className="col-lg-6 bg-indigo text-white">
                <div className="p-5">
                  <h3 className="fw-normal mb-5">General Information</h3>

                  <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <textarea type="text" id="address" rows="5" className="form-control form-control-lg" value={address} onChange={(e)=>{setAddress(e.target.value);}}/>
                      <label className="form-label" htmlFor="address">Address</label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-outline form-white">
                      <input type="text" id="mobile" pattern="\d*" minLength="10" maxLength="10" className="form-control form-control-lg" value={mno} onChange={(e)=>{setMno(e.target.value);}}/>
                      <label className="form-label" htmlFor="mobile">Mobile No</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4 pb-3">
                    <input className="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label text-white" htmlFor="form2Example3">
                      I do accept the <a href="#!" className="text-white"><u>Terms and Conditions</u></a> of your
                      site.
                    </label>
                  </div>

                  <button type="submit" className="btn btn-light btn-lg"
                    data-mdb-ripple-color="dark" onClick={addUser}>Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form> 
    </>
  );
}
