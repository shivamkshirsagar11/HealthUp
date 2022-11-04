import React from 'react'
export default function HistoryCard(props) {
    var y = props.allPatient;
  return (
    <div className="container">
    <table className="table table-hover">
      <tbody>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Patient Id</th>
        <th scope="col">Appointment Id</th>
        <th scope="col">Problem</th>
        <th scope="col">Special Condition</th>
        <th scope="col">Previous Problem</th>
        <th scope="col">Appointment Time</th>
        <th scope="col">Appointment Status</th>
        <th scope="col">Doctor Reference</th>
        <th scope="col">Previous Response</th>
      </tr>
    {y.map((ele,index)=>(
        <tr key={(ele._id).toString().slice(15,24)}>
            <th scope="row">{index+1}</th>
          <td >{ele.full_name}</td>
          <td >{ele.patient_id}</td>
          <td >{ele._id}</td>
          <td >{ele.problem}</td>
          <td >{ele.special_condition}</td>
          <td >{ele.previous_problem}</td>
          <td >{ele.datetime}</td>
          <td >{ele.status}</td>
          <td >{ele.doc_ref}</td>
          <td >{ele.msg}</td>
<td></td>
        </tr>
    ))}
    </tbody>
      </table>
    </div>
  )
    }
