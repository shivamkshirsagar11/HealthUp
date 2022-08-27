import React from 'react'

export default function RegAppointment(props) {
  let doc = props.docObj;
  return (
    <div className="container">
      <h1>This is appointment page.</h1>
      <table style={{border:"2px solid"}}>
      <tr style={{border:"2px solid"}}>
        <th>Name</th>
        <th>Id</th>
        <th>Mobile</th>
        <th>Specialization</th>
        <th>Timings</th>
      </tr>
      {doc.map((ele,index)=>(
        <tr style={{border:"2px solid"}}>
          <td style={{border:"2px solid"}}>{ele.full_name}</td>
          <td style={{border:"2px solid"}}>{ele._id}</td>
          <td style={{border:"2px solid"}}>{ele.mobile}</td>
          <td style={{border:"2px solid"}}>{ele.specialization_in}</td>
          <td style={{border:"2px solid"}}>{ele.availability_time}</td>
        </tr>
      ))}
      </table>
    </div>
  )
}
