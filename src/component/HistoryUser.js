import React,{useState,useEffect} from 'react'
import HistoryCard from './HistoryCard';
import Loading from './Loading';
export default function HistoryUser() {
    const [hide,setHide] = useState(false);
    const [allPatient,setPats] = useState({});
    var user =  JSON.parse(localStorage.getItem("login_user"));
    var data = {id:user._id};
    useEffect(()=>{
      callme();
    },[])
    function callme (){
      fetch(`http://localhost:8080/api/appointment/get/all/fromuser`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: json.stringify(data)
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
        <HistoryCard allPatient = {allPatient}/>
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