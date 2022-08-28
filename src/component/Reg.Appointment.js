import React from 'react'

export default function RegAppointment() {
  let doc = JSON.parse(localStorage.getItem('docs'));
  console.log(doc);
  return (
    <div className="container">
      <h1>This is appointment page.</h1>
      <table>
      <tbody>
      <tr>
        <th>Name</th>
        <th>Id</th>
        <th>Mobile</th>
        <th>Specialization</th>
        <th>Timings</th>
      </tr>
      {doc.map((ele,index)=>(
        <tr key={(ele._id).toString().slice(15,24)}>
          <td >{ele.full_name}</td>
          <td >{ele._id}</td>
          <td >{ele.mobile}</td>
          <td >{ele.specialization_in}</td>
          <td >{ele.availability_time}</td>
        </tr>
      ))}
      </tbody>
      </table>
    </div>
  )
}
