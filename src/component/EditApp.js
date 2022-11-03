import React,{useState} from 'react';

export default function Edit(props) {
  const [pid,setPid]  = useState(props.obj.patient_id);
  const [fname,setFname]  = useState(props.obj.full_name);
  const [prob,setProb] = useState(props.obj.problem);
  const [anyp,setAnyp] = useState(props.obj.special_condition);
  const [prec,setPrec] = useState(props.obj.previous_problem);
  const guard = JSON.parse(localStorage.getItem('user_user'));
  const gid = JSON.parse(localStorage.getItem('login_user'));
  const [dtime,setDTime] = useState(props.obj.datetime);
  const [status,setStatus] = useState(props.obj.status);
  const [err,setErr] = useState("")
  const [doc,setDoc] = useState(props.obj.doc_ref);
  const [msg,setMsg] = useState(props.obj.msg);
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
    doc_ref:doc,
    msg:msg
  }
const savePatient = (e)=>{
e.preventDefault();
console.log(patient)
fetch('http://localhost:8080/api/patient/update/edit/admin',{
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
    Patient Name: <input type="text" className="form-control" value={fname} readOnly/>
  </div>
  <div className="col">
    Any previous Problems: <input type="text" className="form-control" value={anyp} readOnly/>
  </div>
  <div className="col">
    Patient ID (important): <input type="text" className="form-control" value={pid} readOnly/>
  </div>
  <div className="col">
    Any Special Condition: <input type="text" className="form-control" value={prec} readOnly/>
  </div>
</div>
<br></br>
<hr></hr>
<div className="row">
  <div className="col">
  <div className="col">
    Current Problem: <input type="text" className="form-control" value={prob} readOnly/>
  </div>
  </div>
</div>
<div className="row">
  <div className="col">
    Appointment date Time: <input type="datetime-local" className="form-control" value={dtime} readOnly/>
  </div>
  <div className="col">
  Appointment Status : <input type="text" className="form-control" value={status} onChange={(e)=>{setStatus(e.target.value)}}/>
  </div>
  <div className="col">
  Doctor Reference : <input type="text" className="form-control" value={doc} onChange={(e)=>{setDoc(e.target.value)}}/>
  </div>
  <div className="col">
  Response to User : <input type="text" className="form-control" value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
  </div>
</div>
<br/>
<hr></hr>
  <button type="submit" className="btn btn-danger">Approve Appointment</button>
</form>
<small style={{color:'red'}}>{err}</small>
    </div>
  );
}
