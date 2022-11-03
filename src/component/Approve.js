import React,{useState,useEffect} from 'react'
import ApproveCard from './ApproveCard';
import Loading from './Loading';
export default function Approve() {
    const [hide,setHide] = useState(false);
    const [allPatient,setPats] = useState({});
    useEffect(()=>{
      callme();
    },[])
    function callme (){
      fetch(`http://localhost:8080/api/appointment/get/pending`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
      })
      .then(async (res)=>{
        return await res.json();
      })
      .then((pats)=>{
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
        <ApproveCard allPatient = {allPatient}/>
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
