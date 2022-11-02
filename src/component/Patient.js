import React,{useState,useEffect} from 'react'
import Loading from './Loading';
import PatientCore from './PatientCore';
export default function Patient() {
    const [hide,setHide] = useState(false);
    const [allPatient,setPats] = useState({});
    useEffect(()=>{
      callme();
    },[])
    function callme (){
      var user =  JSON.parse(localStorage.getItem("login_user"));
      var data = {id:user._id};
      console.log(data);
      fetch(`http://localhost:8080/api/patient/getAll`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(async (res)=>{
        return await res.json();
      })
      .then((pats)=>{
        console.log("in use effects");
        console.log(pats);
        setPats(pats);
        setTimeout(()=>{
          setHide(true);
        },2000)
      })
    }
    function adjustFlowOfPage(){
      if(hide)
      return (
        <PatientCore allPatient = {allPatient} hideFxn = {setHide}/>
      );
      else{
        return(
          <Loading/>
        );
      }
    }
  return (
    <>
    {adjustFlowOfPage()}
    </>
  )
}
