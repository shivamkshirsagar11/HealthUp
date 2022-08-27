import React,{useState} from 'react';

export default function RegPatient() {
  const [pid,setPid] = useState(makeid(8));
  const [fname,setFname]  = useState('');
  const [prob,setProb] = useState('');
  // const [anyp,setAnyp] = useState('');
  // const [prem,setPrem] = useState('');
  const [guard,setGuard] = useState(JSON.parse(localStorage.getItem('user_user')));
  const [gid,setGid] = useState(JSON.parse(localStorage.getItem('login_user')));
  // const [dname,setDname] = useState('');
  // const [agid,setAgid] = useState(makeid(16));
  // const [acid,setAcid] = useState(makeid(5));
  function makeid(length) {
    var result           = '';
    var characters       = '@#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


  return (
    <div className="container my-4 my-4">
      <form>
      <div className="row">
  <div className="col">
    Guardian Id: <input type="text" className="form-control" value={gid._id} readOnly/>
  </div>
  <div className="col">
    Guardian Name: <input type="text" className="form-control" value={guard.full_name} readOnly/>
  </div>
  <div className="col">
    Contact No: <input type="text" className="form-control" value={guard.mobile_no} readOnly/>
  </div>
  <div className="col">
    Email: <input type="text" className="form-control" value={gid.email} readOnly/>
  </div>
</div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={gid.email} readOnly/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
