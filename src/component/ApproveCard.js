import React,{useState} from 'react'
import EditApp from './EditApp';
export default function ApproveCard(props) {
    var y = props.allPatient;
    const [hide,setHide] = useState(true)
    const [obj,setObj] = useState({})
    const [err, setErr] = useState("")
    function onClickDelete(deleteId){
      var packID = {oldId:deleteId}
      console.log("in delete")
      fetch(`http://localhost:8080/api/patient/update/delete/admin`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(packID)
      }).then(async (res)=>{
        return await res.json();
      }).then(
        (data)=>{
          if (data === "done"){
            window.location.reload();
          }
          else{
            setErr("Some error occurred!")
          }
        }
      )
    }
    if(hide){
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
        <th scope="col">Approve</th>
        <th scope="col">Delete</th>
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
          <td ><svg onClick={()=>{setHide(false); setObj(ele)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
</svg></td>
          <td ><svg onClick={()=>{onClickDelete(ele._id);}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></td>
<td></td>
        </tr>
    ))}
    </tbody>
      </table>
      <span style={{"color":"red"}}>{err}</span>
    </div>
  )
    }
    else{
      return(<EditApp obj = {obj}/>);
    }
}
