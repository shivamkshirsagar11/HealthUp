import React from 'react'
import "../design/patient.css"
export default function Patient() {
    var y = JSON.parse(localStorage.getItem('patient'))
    console.log(y);
  return (
    <div className="container">
    <table>
      <tbody>
      <tr>
        <th>Name</th>
        <th>Patient Id</th>
        <th>Guardian Id</th>
        <th>Problem</th>
        <th>Special Condition</th>
        <th>Previous Problem</th>
      </tr>
    {y.map((ele,index)=>(
        <tr key={(ele._id).toString().slice(15,24)}>
          <td >{ele.full_name}</td>
          <td >{ele.patient_id}</td>
          <td >{ele.guardian_id}</td>
          <td >{ele.problem}</td>
          <td >{ele.special_condition}</td>
          <td >{ele.previous_problem}</td>
        </tr>
    ))}
    </tbody>
      </table>
      {/* <small style={{color:'red'}}>{error}</small> */}
      {/* <small style={{color:'red'}}>save is :{y[0]._id}</small> */}
    </div>
  )
}
