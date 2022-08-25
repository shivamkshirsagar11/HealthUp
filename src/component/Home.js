import React from 'react';
import {Link} from 'react-router-dom';
import appointment from '../img/appointment.jpg'
import patient from '../img/patient.jpg'
import profile from '../img/profile.jpg'
import Navbar from './Navbar';
export default function Home() {
  return (
    <div>
      <Navbar/>
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={appointment} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5><Link style={{'text-decoration':'none','color':'#6037E4'}} to="/Healthup/register/appointment"><b>Book Appointment</b></Link></h5>
        <p style={{'color':'black'}}>Book your Appointment with doctor and get health checkup!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={patient} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5><Link style={{'text-decoration':'none','color':'#6037E4'}} to="/Healthup/register/patient"><b>Register patient</b></Link></h5>
        <p style={{'color':'black'}}>Register patient and after that you can book appointment for him/her.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={profile} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5><Link style={{'text-decoration':'none','color':'#6037E4'}} to="/Healthup/user/profile"><b>Profile setting</b></Link></h5>
        <p style={{'color':'ffffff'}}>Customise your preferences settings.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
