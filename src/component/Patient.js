import React,{useState} from 'react'

export default function Patient() {
    var save={};
    const [error,setError] = useState('');
    let pat = JSON.parse(localStorage.getItem('login_user'))._id;
    let patient = {id:pat}
    function getPatient(){
        fetch('http://localhost:8080/api/patient/getAll',{
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(patient)})
            .then(async (res) =>{
                if(res.status === 200){
                  save = await res.json();
                    // return await res.json();
                }
                else{
                    setError("no Registered Patient found!");
                    return await res.json();
                }
            })
            .then((data)=>{
              // save=data;
                console.log('inside: ',save);
                return data;
            })
    }
    getPatient();
    console.log('outside: ',save);
  return (
    <div className="container">
    <h1>show patient page</h1>
    <table>
      <tbody>
      {/* <tr>
        <th>Name</th>
        <th>Patient Id</th>
        <th>Guardian Id</th>
        <th>Problem</th>
        <th>Special Condition</th>
        <th>Previous Problem</th>
      </tr> */}
    {/* {pats.map((ele,index)=>(
        <tr key={(ele._id).toString().slice(15,24)}>
          <td >{ele.full_name}</td>
          <td >{ele.patient_id}</td>
          <td >{ele.guardian_id}</td>
          <td >{ele.problem}</td>
          <td >{ele.special_condition}</td>
          <td >{ele.previous_problem}</td>
        </tr>
    ))} */}
    </tbody>
      </table>
      <small style={{color:'red'}}>{error}</small>
    </div>
  )
}
