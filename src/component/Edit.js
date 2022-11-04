import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';

export default function Edit(props) {
  const [pid,setPid]  = useState(props.obj.patient_id);
  const [fname,setFname]  = useState(props.obj.full_name);
  const [prob,setProb] = useState(props.obj.problem);
  const [anyp,setAnyp] = useState(props.obj.special_condition);
  const [prec,setPrec] = useState(props.obj.previous_problem);
  const guard = JSON.parse(localStorage.getItem('user_user'));
  const gid = JSON.parse(localStorage.getItem('login_user'));
  const [dtime,setDTime] = useState(props.obj.datetime);
  const [status,setStatue] = useState(props.obj.status);
  const [olddt,setOldDT] = useState(dtime);
  const [err,setErr] = useState("")
  const setHide = props.unhide
  useEffect(() => {
    if (olddt !== dtime)
    setStatue("pending")
  }, [dtime]);
  let patient = {
    oldid: props.obj._id,
    patient_id:pid,
    guardian_id:gid._id,
    full_name:fname,
    problem:prob,
    special_condition:prec,
    previous_problem:anyp,
    datetime:dtime,
    status:status,
  }
const history = useHistory();
const savePatient = (e)=>{
e.preventDefault();
console.log(patient)
fetch('http://localhost:8080/api/patient/update/edit',{
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(patient)})
  .then(async (res)=>{
    return await res.json();
  }).then((data)=>{
    if (data === "done"){
      window.location.reload();
    }
    else{
      setErr("try again.. some error occured!");
    }
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
<small style={{color:'red'}}>{err}</small>
    </div>
  );
}
