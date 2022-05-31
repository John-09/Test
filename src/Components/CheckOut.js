import React from "react";
import "./CheckIn.css";
import { useState } from "react";

export default function CheckIn() {
  const [vehicle_no,setvehicle_no] = useState(" ");
  const [checkout_time,settimeout_time] = useState(" ");
  const [result,set_result]=useState(" ");

  // const differenceCal=()=>{
  //     diff_value=checkout_time-result;
  //     diff_value*=40;
  //     alert('You have to pay',diff_value)
  // }
  const checkout_values = async()=>{
    console.log('Hello')
    const fetchs = await fetch(`http://localhost:3000/checkOut`,{
      method: 'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({  
        vehnum:vehicle_no,
      })
    })
   
      const data = await fetchs.json();
      //set_result(data.checkin);
      console.log(data);
      console.log(data.checkin);
      let diff_value=parseInt((checkout_time),10)-parseInt((data.checkin),10);
      console.log(diff_value)
      let ans=diff_value*40;
      alert(`You have to pay ${ans}`)
      let datas = data.checkin;
      console.log(datas);
      if(data.vehnum === vehicle_no){
      // set_result(datas);
      console.log(vehicle_no);
      console.log(result);
     // differenceCal();
    } else{
        alert('Errror')
    }
}
  
  return(
      
      <div >
     <section class="component">
  <div class="credit-card">
    <h2>Vehicle Check Out</h2>
    <form>
      <input type="text" placeholder="Vehicle number" onChange={e=>setvehicle_no(e.target.value)}/>
      <input type="text" placeholder="Check Out Time" onChange={e=>settimeout_time(e.target.value)}/>
      <button type="submit" class="valid-button" onClick={checkout_values}>Submit</button>
    </form>
  </div>
</section>

      </div>
      )
  }
  
   










