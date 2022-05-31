import React from "react";
import "./PayBill.css";
import { useNavigate } from 'react-router-dom';

export default function PayBill() {
  let navigate = useNavigate();
    return(
      
      <div >
     <section class="component">
  <div class="credit-card">
    <form>
      <h2>Valet Parking</h2>
      <h2>Welcome!</h2>
      <button type="submit" class="valid-button" onClick={()=>navigate('CheckIn')}>Check In</button>
    </form>
  </div>
</section>

      </div>
      )
  }
  
   










