import React from 'react';
import "../design/Admin.css";
import {Link} from 'react-router-dom';
export default function Admin() {
  return (
   <>
   <div className = "container">
   <h3>Admin Panel</h3>
   <hr/>
   <div id="rcorners3">
    <div className="mx-auto">
    <ul>
        <li>
            <Link to="/Healthup/admin/appointments/approve">
            Approve Appointments
            </Link>
        </li>
        <li>
            <Link to="/Healthup/admin/appointments/approved/history">
                Approved/cancelled Appointments
            </Link>
        </li>
    </ul>
    </div>
   </div>
   </div>
   </>
  );
}
