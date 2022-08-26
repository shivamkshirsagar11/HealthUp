import React,{useState} from 'react';

export default function RegPatient() {
  const [pid,setPid] = useState(makeid(8));
  const [fname,setFname]  = useState('');
  const [prob,setProb] = useState('');
  const [anyp,setAnyp] = useState('');
  const [prem,setPrem] = useState('');
  const [guard,setGuard] = useState('');
  const [gid,setGid] = useState(JSON.parse(localStorage.getItem('login_user')));
  const [dname,setDname] = useState('');
  const [agid,setAgid] = useState(makeid(12));
  const [acid,setAcid] = useState(makeid(5));
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
    <input type="text" className="form-control" value={agid} readOnly/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" onChange={(e)=>setFname(e.target.value)}/><br/><small>Full Name: {fname}</small>
  </div>
</div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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
