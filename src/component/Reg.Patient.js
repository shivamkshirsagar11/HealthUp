import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function RegPatient() {
  const [pid,setPid]  = useState(makeid(6));
  const [fname,setFname]  = useState('');
  const [prob,setProb] = useState('');
  const [anyp,setAnyp] = useState('');
  const [prec,setPrec] = useState('');
  const [serverres,setServerRes] = useState('');
  const guard = JSON.parse(localStorage.getItem('user_user'));
  const gid = JSON.parse(localStorage.getItem('login_user'));
  const [dtime,setDTime] = useState("");
  const [status,setStatue] = useState("pending");
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
let patient = {
  patient_id:pid,
  guardian_id:gid._id,
  full_name:fname,
  problem:prob,
  special_condition:prec,
  previous_problem:anyp,
  datetime:dtime,
  status:status,
  doc_ref:"Not Assigned",
  msg:"N/A",
}
const history = useHistory();
const savePatient = (e)=>{
e.preventDefault();
fetch('http://localhost:8080/api/patient/save',{
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(patient)})
  .then(async (res)=>{
    if (res.status === 200){
      history.push('/Healthup/home');
      return await res.json();
    }
    else{
      return await res.json();
    }
  })
  .then((data)=>{
    setServerRes(data);
  })
}

  return (
    <div className="container my-4 my-4">
      <form onSubmit={savePatient}>
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
<br></br>
<hr></hr>
<div className="row">
<div className="col">
    Patient Name: <input type="text" className="form-control" value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
  </div>
  <div className="col">
    Any previous Problems: <input type="text" className="form-control" value={anyp} onChange={(e)=>{setAnyp(e.target.value)}}/>
  </div>
  <div className="col">
    Patient ID (important): <input type="text" className="form-control" value={pid} readOnly/>
  </div>
  <div className="col">
    Any Special Condition: <input type="text" className="form-control" value={prec} onChange={(e)=>{setPrec(e.target.value)}}/>
  </div>
</div>
<br></br>
<hr></hr>
<div className="row">
  <div className="col">
  <div className="col">
    Current Problem: <input type="text" className="form-control" value={prob} onChange={(e)=>{setProb(e.target.value)}}/>
  </div>
  </div>
</div>
<div className="row">
  <div className="col">
    Appointment date Time: <input type="datetime-local" className="form-control" value={dtime} onChange={(e)=>{setDTime(e.target.value)}}/>
  </div>
  <div className="col">
  Appointment Status : <input type="text" className="form-control" value={status} readOnly/>
  </div>
</div>
<br/>
<hr></hr>
  <button type="submit" className="btn btn-danger">Arrange Appointment</button>
</form>
<small style={{color:'red'}}>{serverres}</small>
    </div>
  );
}
