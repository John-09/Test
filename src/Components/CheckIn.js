import React from "react";
import "./CheckIn.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function CheckIn() {
  let navigate = useNavigate();
  const [vehicle_no,setvehicle_no] = useState(" ");
  const [vehicle_type,setvehicle_type] = useState(" ");
  const [vehicle_model,setvehicle_model] = useState(" ");
  const [phn_no,setpho_no] = useState(" ");
  const [customer_name,setcustomer_name]=useState(" ");
  const [checkin_Time,setcheckin_time]=useState(" ");
  
  const checkin_values = async()=>{
    console.log('Hello')
    const fetchs = await fetch(`http://localhost:3000/checkIn`,{
      method: 'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({  
        vehnum:vehicle_no,
        vehtype: vehicle_type,
        vehmodel: vehicle_model,
        phnum: phn_no,
        name: customer_name,
        checkin: checkin_Time
      })
    })
   
      const data = await fetchs.json();
      console.log(data);
      if(data==='Checked in successfully')
      alert("Details added successfully")
      else
      alert('Unable to register')
}
    return(
      
      <div >
     <section class="component">
  <div class="credit-card">
    <h2>Vehicle Check In</h2>
    <form>
      <input type="text" placeholder="Vehicle number"  onChange={e=>setvehicle_no(e.target.value)}/>
      <input type="text" placeholder="Vehicle type" onChange={e=>setvehicle_type(e.target.value)}/>
      <input type="text" placeholder="Vehicle model" onChange={e=>setvehicle_model(e.target.value)}/>
      <input type="text" placeholder="Phone number" onChange={e=>setpho_no(e.target.value)}/>
      <input type="text" placeholder="Customer Name" onChange={e=>setcustomer_name(e.target.value)}/>
      <input type="text" placeholder="Check in Time" onChange={e=>setcheckin_time(e.target.value)}/>

      <button type="submit" class="valid-button" onClick={checkin_values} >Check In</button>
      <button type="submit" class="valid-button" onClick={()=>navigate('CheckOut')}>Check Out</button>
    </form>
  </div>
</section>

      </div>
      )
  }
  
   










